import {
  Button,
  Html,
  Text,
  Container,
  Section,
  Heading,
} from "@react-email/components";
import * as React from "react";

export default function FollowUpEmail() {
  return (
    <Html>
      <Container style={styles.container}>
        <Section style={styles.header}>
          <Heading style={styles.heading}>
            ¡Hola de nuevo desde Pocket Solar System!
          </Heading>
        </Section>
        <Section style={styles.body}>
          <Text style={styles.text}>Hola,</Text>
          <Text style={styles.text}>
            Esperamos que estés disfrutando de todo el contenido que hemos
            compartido contigo hasta ahora. Queremos recordarte que puedes
            explorar más sobre nuestro sistema solar y mucho más en nuestro
            sitio web.
          </Text>
          <Button
            href="https://pocket-solar-system.vercel.app"
            style={styles.button}
          >
            Explorar Ahora
          </Button>
        </Section>
        <Section style={styles.footer}>
          <Text style={styles.footerText}>
            Gracias por seguir con nosotros,
          </Text>
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
    textAlign: "center" as "center",
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
