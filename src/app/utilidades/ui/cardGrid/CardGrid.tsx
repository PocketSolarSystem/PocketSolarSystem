import Link from "next/link";
import Image from "next/image";
import React from "react";

interface CardProps {
  href: string;
  imageSrc: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ href, imageSrc, text }) => {
  return (
    <Link
      href={href}
      className="hidden sm:block p-2"
      style={{ flex: "1 1 25%", maxWidth: "25%", boxSizing: "border-box" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "150%",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
      >
        <Image
          src={imageSrc}
          alt={text}
          title={text}
          layout="fill"
          objectFit="cover"
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ color: "white", fontSize: "1.25rem", margin: 0 }}>
            {text}
          </h3>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "24px", height: "24px" }}
            className="hidden sm:block"
          >
            <circle cx="16" cy="16" r="16" fill="#FF0000" />
            <path
              d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const CardGrid: React.FC = () => {
  const cards: CardProps[] = [
    {
      //href: "/sistema-solar/Sol",
      href: `/work-in-progress`,
      imageSrc: "/cardGrid/sistema-solar.jpg",
      text: "Nuestro Sistema Solar",
    },
    {
      href: "/sistema-solar/planetas/acerca-de-los-planetas",
      imageSrc: "/cardGrid/planetas.jpg",
      text: "Acerca de los Planetas",
    },
    {
      //href: "/sistema-solar/lunas/acerca-de-las-lunas",
      href: `/work-in-progress`,
      imageSrc: "/cardGrid/lunas.jpg",
      text: "Acerca de las Lunas",
    },
    {
      //href: "/sistema-solar/asteroides-cometas-meteoros/acerca-de-asteroides-cometas-meteoros",
      href: `/work-in-progress`,
      imageSrc: "/cardGrid/asteroides-cometas.jpg",
      text: "Acerca de Asteroides y Cometas",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {cards.map((card) => (
        <Card key={card.text} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
