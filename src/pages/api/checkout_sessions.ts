// eslint-disable import/no-extraneous-dependencies
import { formatLineItems } from "views/shop/checkout/formatLineItems";
import { ApiRequest, ApiResponse, ResponseError } from "./api.types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: ApiRequest, res: ApiResponse) {
  const { shippingTotal, cart } = JSON.parse(req.body);
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
    } catch (err: unknown) {
      const error = err as ResponseError;
      const { statusCode, message } = error;
      res.status(statusCode || 500).json(message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
