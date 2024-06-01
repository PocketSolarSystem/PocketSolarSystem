import Typewriter from "typewriter-effect";

interface HeaderProps {
  englishText: string;
  spanishText: string;
}

const Header = ({ englishText, spanishText }: HeaderProps) => (
  <h1 className="md:text-4xl text-2xl md:mb-8 md:basis-0 pt-6">
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(englishText)
          .pauseFor(2000)
          .deleteAll()
          .typeString(spanishText)
          .start();
      }}
    />
  </h1>
);

export default Header;
