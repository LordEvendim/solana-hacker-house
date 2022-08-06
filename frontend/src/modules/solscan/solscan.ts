import axios from "axios";
import { AsyncRequestResult } from "../../types/states/asyncActionState";

export const requestTransactionHistory =
  async (): Promise<AsyncRequestResult> => {
    const data = {
      params: {
        account: "DEhWD5iVH8Di1c8Gx6djCm4jPZDcVzeuE7zgpQLAg4C9",
        limit: "20",
      },
    };

    try {
      console.log("making request");
      const response = await axios.get(
        "https://public-api.solscan.io/account/transactions",
        data
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
