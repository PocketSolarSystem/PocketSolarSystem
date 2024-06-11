import { Html, Text, Container, Heading, Img } from "@react-email/components";
import * as React from "react";

const imageContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  overflow: "hidden",
  marginTop: "-20%",
  marginBottom: "-6%",
};

const titleImageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  filter: "brightness(70%)",
  clipPath: "inset(30% 0% 10% 0%)",
  objectFit: "cover",
};

const headingStyle: React.CSSProperties = {
  zIndex: 1,
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  padding: "10px",
};

const textStyle: React.CSSProperties = {
  marginBottom: "20px",
  textAlign: "justify",
};

const captionStyle: React.CSSProperties = {
  fontStyle: "italic",
  color: "#666666",
  textAlign: "center",
};

const buttonStyle: React.CSSProperties = {
  display: "block",
  margin: "20px auto 0",
  padding: "10px 20px",
  marginTop: "20px",
  fontSize: "16px",
  color: "#ffffff",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  textDecoration: "none",
  textAlign: "center",
};

export default function DatoCurioso() {
  return (
    <Html>
      <Container style={styles.container}>
        <Heading style={styles.heading}>
          Temperaturas en nuestro Sistema Solar
        </Heading>
        <div style={styles.imageContainer}>
          <Img
            src="https://science.nasa.gov/wp-content/uploads/2023/10/edu-solar-system-large.png?w=2560&format=webp"
            alt="Imagen de temperaturas"
            style={styles.titleImage}
          />
        </div>
        <Text style={styles.text}>
          ¿Cómo es el clima por ahí? Nos referimos a allá afuera en nuestro
          sistema solar, donde el pronóstico podría no ser exactamente lo que
          piensas.
        </Text>
        <Text style={styles.text}>
          Veamos la temperatura media del Sol y de los planetas en nuestro
          sistema solar. La temperatura media es la temperatura promedio sobre
          la superficie de los planetas rocosos: Mercurio, Venus, Tierra y
          Marte. El planeta enano Plutón también tiene una superficie sólida.
          Pero como los gigantes gaseosos no tienen una superficie, la media es
          la temperatura promedio en lo que sería equivalente al nivel del mar
          en la Tierra.
        </Text>
        <Img
          src="https://science.nasa.gov/wp-content/uploads/2023/11/solar-system-thermometer.jpg?w=2560&format=webp"
          alt="Termómetro del Sistema Solar"
          style={styles.image}
        />
        <Text style={styles.caption}>
          Una ilustración de los planetas en nuestro sistema solar mostrando sus
          temperaturas medias. Los planetas y el planeta enano Plutón no están a
          escala. NASA
        </Text>
        <a
          href="https://pocket-solar-system.vercel.app/work-in-progress"
          style={styles.button}
        >
          Sigue leyendo...
        </a>
      </Container>
    </Html>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: "#333333",
    lineHeight: "1.6",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  imageContainer: imageContainerStyle,
  heading: headingStyle,
  titleImage: titleImageStyle,
  image: {
    maxWidth: "100%",
    height: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  text: textStyle,
  caption: captionStyle,
  button: buttonStyle,
};
