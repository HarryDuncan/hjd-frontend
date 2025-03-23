import { FetchResponse } from "models/general.types";

export type Product = {
  id: number;
  title: string;
  description: string;
  imageUrls: string[];
  stock: number;
  price: number | null;
  hasVariations: boolean;
  percentageDonated: number;
  hasEditions: boolean;
  variations?: ProductVariation[];
  shippingOptionId: number | null;
  multiImages: string[] | null;
  isSoldOut?: boolean;
};

export type ProductVariation = {
  id: number;
  productId: number;
  title: string;
  price: number;
  stock: number;
  shippingOptionId: number;
};

export type ShippingOption = {
  id: number;
  apZone0: number;
  apZone1: number;
  apZone2: number;
  apZone3: number;
  apZone4: number;
  apZone5: number;
  apZone6: number;
};

export type ShippingZone = {
  id: number;
  country: string;
  ausPostZone: number;
  estimatedDeliveryTime: string;
  countryCode: string | null;
};

export type ReturnedShopData = FetchResponse & {
  shopData: {
    products: Product[];
    productVariations: ProductVariation[];
    shippingZones: ShippingZone[];
    shippingOptions: ShippingOption[];
  };
};
