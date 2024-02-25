import { CURRENCIES } from "constants/shop.constants";
import { formatLineItems } from "../formatLineItems";

const MOCK_CART = [
  {
    product: { title: "test-1", price: 200 },
    quantity: 2,
  },
  {
    product: { title: "test-2", price: 200 },
    quantity: 200,
  },
];
const MOCK_SHIPPING_COST = 200;
describe("formatLineItems", () => {
  test("should convert an XYZ coordinate object to an array of numbers", () => {
    const formatted = formatLineItems(MOCK_CART, MOCK_SHIPPING_COST);
    expect(formatted).toEqual([
      {
        price_data: {
          currency: CURRENCIES.AUD,
          unit_amount: 20000,
          product_data: {
            name: "test-1",
          },
        },
        quantity: 2,
      },
      {
        price_data: {
          currency: CURRENCIES.AUD,
          unit_amount: 20000,
          product_data: {
            name: "test-2",
          },
        },
        quantity: 200,
      },
      {
        price_data: {
          currency: CURRENCIES.AUD,
          unit_amount: 20000,
          product_data: {
            name: "shipping",
          },
        },
        quantity: 1,
      },
    ]);
  });
});
