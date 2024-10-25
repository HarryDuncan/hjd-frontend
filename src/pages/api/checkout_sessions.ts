// eslint-disable import/no-extraneous-dependencies
import { formatLineItems } from "views/shop/checkout/formatLineItems";
import {
  ApiResponse,
  CheckoutSessionRequest,
  ResponseError,
} from "./api.types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(
  req: CheckoutSessionRequest,
  res: ApiResponse
) {
  if (req.method === "POST") {
    try {
      const cart = JSON.parse(req.body.cart);
      const shippingTotal = JSON.parse(req.body.shippingTotal);
      const shippingZoneCode = JSON.parse(req.body.shippingZoneCode);
      const lineItems = formatLineItems(cart, shippingTotal);
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        shipping_address_collection: {
          allowed_countries: [shippingZoneCode],
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
