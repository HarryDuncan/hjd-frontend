import { formatLineItems } from "views/shop/checkout/formatLineItems";
import { ApiResponse, CheckoutSessionRequest } from "./api.types";
import { checkInventory } from "services/shop/checkInventory";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: CheckoutSessionRequest,
  res: ApiResponse
) {
  const cart = JSON.parse(req.body.cart);
  const shippingTotal = JSON.parse(req.body.shippingTotal);
  const { inventoryData } = await checkInventory(cart);
  console.log(inventoryData);
  if (req.method === "POST") {
    try {
      const lineItems = formatLineItems(cart, shippingTotal);
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,

        shipping_address_collection: {
          allowed_countries: ["US", "CA", "NZ", "AU", "HK"],
        },
        mode: "payment",
        success_url: `${req.headers.origin}/checkout/success`,
        cancel_url: `${req.headers.origin}/checkout/canceled`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
