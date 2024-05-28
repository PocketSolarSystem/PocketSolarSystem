import {
  Button,
  Html,
  Text,
  Container,
  Section,
  Heading,
} from "@react-email/components";
import * as React from "react";

export default function WelcomeEmail() {
  return (
    <Html>
      <Container style={styles.container}>
        <Section style={styles.header}>
          <Heading style={styles.heading}>
            Bienvenido a Pocket Solar System!
          </Heading>
        </Section>
        <Section style={styles.body}>
          <Text style={styles.text}>Hola,</Text>
          <Text style={styles.text}>
            Nos alegra darte la bienvenida a Pocket Solar System, donde
            enseñamos lo desconocido en el aire y el espacio, innovamos para el
            beneficio de la humanidad e inspiramos al mundo a través del
            descubrimiento.
          </Text>
          <Text style={styles.text}>
            Nos sentimos emocionados de que te hayas unido a nosotros en este
            viaje de exploración y aprendizaje. Esperamos que disfrutes de todo
            el contenido que hemos preparado para ti.
          </Text>
          <Text style={styles.text}>
            Para comenzar, haz clic en el botón de abajo y descubre más sobre
            nuestro sistema solar y más allá.
          </Text>
          <Button
            href="https://pocket-solar-system.vercel.app"
            style={styles.button}
          >
            Explorar Ahora
          </Button>
        </Section>
        <Section style={styles.footer}>
          <Text style={styles.footerText}>Gracias por unirte a nosotros,</Text>
          <Text style={styles.footerText}>
            El equipo de Pocket Solar System
          </Text>
        </Section>
      </Container>
    </Html>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
  },
  header: {
    backgroundColor: "#004080",
    padding: "20px",
    borderRadius: "8px 8px 0 0",
    textAlign: "center" as "center", // Ajuste de tipo para textAlign
  },
  logo: {
    marginBottom: "10px",
  },
  heading: {
    color: "#ffffff",
    fontSize: "24px",
    margin: "0",
  },
  body: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "0 0 8px 8px",
  },
  text: {
    color: "#333333",
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "10px 0",
  },
  button: {
    backgroundColor: "#004080",
    color: "#ffffff",
    padding: "12px 20px",
    textDecoration: "none",
    borderRadius: "5px",
    display: "inline-block",
    marginTop: "20px",
  },
  footer: {
    marginTop: "20px",
  },
  footerText: {
    color: "#333333",
    fontSize: "14px",
    lineHeight: "1.5",
    margin: "5px 0",
  },
};
