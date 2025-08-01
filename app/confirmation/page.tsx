"use client";
import * as motion from "motion/react-client";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmation() {
  return (
    <motion.div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
      <h1 className="text-2xl font-semibold mb-2">¡Orden recibida!</h1>
      <p className="text-gray-600 mb-6">
        Gracias por tu compra. Estamos procesando tu pedido y recibirás una
        confirmación por email.
      </p>

      <Link
        href="/"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
      >
        Volver al inicio
      </Link>
    </motion.div>
  );
}
