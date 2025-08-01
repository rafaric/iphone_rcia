/* route handler Stripe */
import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import { CartItem } from "@/utils/interface";

export async function POST(req: Request) {
  const { items }: { items: CartItem[] } = await req.json();
  console.log(typeof items[0]?.price);
  if (!items.every((item: CartItem) => typeof item.price === "number")) {
    return NextResponse.json(
      { error: "Invalid price format" },
      { status: 400 }
    );
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `http://localhost:3000/confirmation`,
    cancel_url: `http://localhost:3000/product-list`,
  });

  return NextResponse.json({ url: session.url });
}
