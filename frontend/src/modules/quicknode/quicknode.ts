import axios from "axios";
import { AsyncRequestResult } from "../../types/states/asyncActionState";

const rpcDefaultConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const requestUserNFTs = async (): Promise<AsyncRequestResult> => {
  const data = {
    jsonrpc: "2.0",
    id: 67,
    method: "qn_fetchNFTs",
    params: {
      wallet: "DEhWD5iVH8Di1c8Gx6djCm4jPZDcVzeuE7zgpQLAg4C9",
      omitFields: ["provenance", "traits"],
      page: 1,
      perPage: 40,
    },
  };

  try {
    const response = await axios.post(
      "https://winter-empty-night.solana-mainnet.discover.quiknode.pro/5b954a919cd9affa51e43c41a269bea0ddafdc22/",
      data,
      rpcDefaultConfig
    );

    if (!response) {
      throw new Error("Network request failed is not defined");
    }

    return {
      status: "succeeded",
      value: response.data,
    };
  } catch (error: any) {
    console.log(error);
    return {
      status: "failed",
      error,
    };
  }
};

export const requestUserBalance = async (): Promise<AsyncRequestResult> => {
  const data = {
    jsonrpc: "2.0",
    id: 1,
    method: "getBalance",
    params: ["vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg"],
  };

  try {
    const response = await axios.post(
      "https://winter-empty-night.solana-mainnet.discover.quiknode.pro/5b954a919cd9affa51e43c41a269bea0ddafdc22/",
      data,
      rpcDefaultConfig
    );

    if (!response) {
      throw new Error("Network request failed is not defined");
    }

    return {
      status: "succeeded",
      value: response.data,
    };
  } catch (error: any) {
    console.log(error);
    return {
      status: "failed",
      error,
    };
  }
};
