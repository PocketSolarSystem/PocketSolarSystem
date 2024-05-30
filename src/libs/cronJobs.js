import cron from "node-cron";
import sendEmail from "./sendEmail";
import Subscriber from "../models/subscriber";
import { connectDB } from "./mongodb";

const sendFollowUpEmail = async () => {
  try {
    await connectDB();

    // Obtener suscriptores que se han suscrito hace 3 días
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const subscribers = await Subscriber.find({
      subscribedAt: { $lte: threeDaysAgo },
      followUpSent: { $ne: true },
    });

    // Enviar correo de seguimiento a cada suscriptor
    for (const subscriber of subscribers) {
      await sendEmail(
        subscriber.email,
        "¡Esperamos que estés disfrutando de nuestro contenido!"
      );

      // Marcar como enviado el correo de seguimiento
      subscriber.followUpSent = true;
      await subscriber.save();
    }
  } catch (error) {
    console.error("Error enviando correo de seguimiento:", error);
  }
};

// Programar el cron job para que se ejecute todos los días a las 10:00 AM
cron.schedule("* * * * *", sendFollowUpEmail);
