// @ts-check
export type ApiRequest = {
  method: string;
  headers: {
    origin: string;
  };
  body: string;
};

export type CheckoutSessionRequest = ApiRequest & {
  body: {
    cart: string;
    shippingTotal: string;
    shippingZoneCode: string;
  };
};
export type CheckoutSuccessRequest = ApiRequest & {
  body: {
    sessionId: string;
  };
};

export interface ResponseError {
  statusCode: number;
  message: string;
}
export type ApiResponse = {
  redirect: (arg0: number, arg1: unknown) => void;
  status: (arg0: number) => {
    (): unknown;
    new (): unknown;
    json: { (arg0: unknown): void; new (): unknown };
    end: { (arg0: string): void; new (): unknown };
  };
  json: (arg0: unknown) => unknown;
  setHeader: (arg0: string, arg1: string) => void;
};
