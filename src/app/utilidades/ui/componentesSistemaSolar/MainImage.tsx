import Image from "next/image";

interface MainImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

const MainImage = ({ src, width, height, alt, title }: MainImageProps) => (
  <div className="mb-8 mt-4 relative">
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      title={title}
      className="border-2 border-solid border-black z-0"
    />
  </div>
);

export default MainImage;
