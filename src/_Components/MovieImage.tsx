import Image from "next/image";

type MovieImageProps = {
  backdrop_path: string;
  title: string;
  className: string;
  loading?: boolean;
};

export const MovieImage = ({
  backdrop_path,
  title,
  className,
  loading,
}: MovieImageProps) => {
  return (
    <Image
      src={backdrop_path}
      width={400}
      height={340}
      alt={title}
      className={className}
      style={{ objectFit: "cover" }}
      loading="eager"
    />
  );
};
