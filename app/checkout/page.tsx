"use client";
import { useCartStore } from "@/context/CartStore";
import { createOrder } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Checkout = () => {
  const router = useRouter();
  const { items, total, clearCart } = useCartStore();
  const [form, setForm] = useState({
    name: "",
    email: "",
    delivery: "retiro",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // Handle checkout process and redirect to payment URL
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      buyerName: form.name,
      buyerEmail: form.email,
      deliveryMethod: form.delivery,
      items,
      total,
    };
    try {
      await createOrder(orderData);
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ items }),
      });
      const { url } = await res.json();
      clearCart();
      router.push(url);
    } catch (error) {
      console.error("Error al crear la orden:", error);
      toast.error("No se pudo completar la orden. Intenta nuevamente");
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Finalizar compra</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded dark:bg-zinc-800"
        />
        <input
          name="email"
          type="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded dark:bg-zinc-800"
        />
        <select
          name="delivery"
          value={form.delivery}
          onChange={handleChange}
          className="w-full border p-2 rounded dark:bg-zinc-800"
        >
          <option value="retiro">Retiro en tienda</option>
          <option value="envio">Envío a domicilio</option>
        </select>

        <hr className="my-6" />

        <div>
          <p className="font-semibold mb-2">Resumen:</p>
          <ul className="space-y-1">
            {items.map((item) => (
              <li
                key={item.slug}
                className="text-sm text-zinc-600 dark:text-zinc-300"
              >
                {item.model} ({item.storage}) - U$S {item.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-medium">
            Total: <strong>U$S {total}</strong>
          </p>
        </div>

        <button
          type="submit"
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Confirmar compra
        </button>
      </form>
    </main>
  );
};

export default Checkout;
