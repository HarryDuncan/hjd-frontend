import { formatLineItems } from "views/shop/checkout/formatLineItems";
import { ApiResponse, CheckoutSessionRequest } from "./api.types";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: CheckoutSessionRequest,
  res: ApiResponse
) {
  const cart = JSON.parse(req.body.cart);
  const shippingTotal = JSON.parse(req.body.shippingTotal);
  if (req.method === "POST") {
    try {
      const lineItems = formatLineItems(cart, shippingTotal);
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "NZ", "AU", "HK"],
        },
        mode: "payment",
        success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
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
