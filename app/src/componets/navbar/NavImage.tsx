
interface NavigationImageProps {
  src: string;
}

const NavImage = ({ src }: NavigationImageProps) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[1.24] w-[87px]"
    />
  );
}
export default NavImage