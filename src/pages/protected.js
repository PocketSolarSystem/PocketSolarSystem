import { useState } from "react";
import Login from "@/components/Login";

export default function Protected() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const sendBulkEmail = async () => {
    const response = await fetch("/api/send-bulk-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: "El Clima en el Espacio: Datos Curiosos que Debes Conocer",
      }),
    });

    if (response.ok) {
      alert("Correo enviado con éxito");
    } else {
      alert("Error al enviar el correo");
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={sendBulkEmail}
        className="bg-blue-500 text-white p-4 rounded"
      >
        Enviar Correo Masivo
      </button>
    </div>
  );
}
