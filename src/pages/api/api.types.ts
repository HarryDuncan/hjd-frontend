import { Product } from "models/shop/types";

export type ApiRequest = {
  method: string;
  body;
};

export type CheckoutSessionRequest = ApiRequest & {
  selectedProducts: Product[];
};

export type ApiResponse = {
  redirect: (arg0: number, arg1: any) => void;
  status: (arg0: number) => {
    (): any;
    new (): any;
    json: { (arg0: any): void; new (): any };
    end: { (arg0: string): void; new (): any };
  };
  setHeader: (arg0: string, arg1: string) => void;
};
