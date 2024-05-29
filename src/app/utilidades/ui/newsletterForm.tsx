import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    if (response.ok) {
      setSuccessMessage(result.message);
      console.log("Correo enviado y suscripción exitosa");
    } else {
      setError(result.message || "Error al enviar el correo");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <h4 className="text-lg mb-4 text-center">
        Suscríbete a nuestro Newsletter
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          required
          className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Suscribirse
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
