import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useUserData } from "../stores/useUserData";

type useWalletType = [
  isConnecting: boolean,
  connectWallet: () => void,
  disconnectWallet: () => void
];

export const useWallet = (): useWalletType => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const login = useUserData((state) => state.login);
  const logout = useUserData((state) => state.logout);

  const connectWallet = useCallback(async () => {
    try {
      setIsConnecting(true);
      if (!window.solana) throw new Error("Cannot find Phantom wallet");

      const result = await window.solana.connect();
      const address = result.publicKey.toString();

      login(address);
      setIsConnecting(false);
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      console.log(error);
      setIsConnecting(false);
    }
  }, [login]);

  const disconnectWallet = () => {
    window.solana.request({ method: "disconnect" });
    logout();
  };

  return [isConnecting, connectWallet, disconnectWallet];
};
