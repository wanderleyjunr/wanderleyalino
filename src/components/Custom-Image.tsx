import Image, { ImageProps } from "next/image";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...props }) => (
  <Image src={src} alt={alt} {...props} />
);

export default CustomImage;
