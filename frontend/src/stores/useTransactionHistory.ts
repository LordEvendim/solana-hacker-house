import { ethers } from "ethers";
import create from "zustand";
import { requestTransactionHistory } from "../modules/solscan/solscan";

interface TransactionHistoryStore {
  transactions: any[];
  fetchTransactions: () => void;
}

export const useTransactionHistory = create<TransactionHistoryStore>((set) => ({
  transactions: [],
  fetchTransactions: async () => {
    try {
      const response = await requestTransactionHistory();

      if (response.status === "succeeded") {
        set({ transactions: response.value });
      }
    } catch (error: any) {
      console.log(error);
    }
  },
}));
