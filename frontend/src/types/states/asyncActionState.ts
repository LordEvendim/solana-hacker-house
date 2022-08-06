export type AsyncActionState =
  | {
      status: "succeeded";
    }
  | {
      status: "loading";
    }
  | {
      status: "failed";
      error: Error;
    }
  | { status: undefined };

export type AsyncRequestResult =
  | {
      status: "succeeded";
      value: any;
    }
  | {
      status: "failed";
      error: Error;
    };
