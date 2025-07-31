export default function ContactPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6 w-screen">
      <h1 className="text-2xl font-bold">Contacto</h1>

      <div className="space-y-2">
        <p>
          ¿Tenés dudas sobre un modelo? ¿Querés coordinar una entrega o venta?
          Escribinos por cualquiera de estos canales:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Email:</strong> contacto@iphonercia.com
          </li>
          <li>
            <strong>WhatsApp:</strong> +54 9 3624 XXX XXX
          </li>
          <li>
            <strong>Instagram:</strong> @iphonestorercia
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Horario de atención</h2>
        <p>Lunes a viernes: 9:00 a 18:00 hs</p>
        <p>Sábados: 9:00 a 13:00 hs</p>
      </div>
    </main>
  );
}
