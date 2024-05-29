const { connectDB } = require("./mongodb");
const Subscriber = require("../src/models/subscriber");
const { sendEmail } = require("./sendEmail");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const DatoCuriosoEmail = require("../emails/datocurioso").default;

const sendBulkEmail = async (subject) => {
  try {
    await connectDB();
    const subscribers = await Subscriber.find();

    const htmlContent = ReactDOMServer.renderToStaticMarkup(
      <DatoCuriosoEmail />
    );

    for (const subscriber of subscribers) {
      await sendEmail(subscriber.email, subject, htmlContent);
    }

    console.log("Correos enviados con éxito");
  } catch (error) {
    console.error("Error al enviar correos", error);
  }
};

// Llama a la función con el asunto y mensaje que deseas enviar
sendBulkEmail("¿Sabías que Plutón es más cálido de lo que piensas?");
