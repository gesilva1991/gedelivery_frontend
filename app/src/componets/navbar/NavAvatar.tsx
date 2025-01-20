
interface NavigationImageProps {
  src: string;
  user_name: string
}

const NavImage = ({ src, user_name }: NavigationImageProps) => {
  return (
    <div className="text-white flex flex-col justify-center items-center">
    <img
      loading="lazy"
      src={src}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[1.24] w-[87px]"
    />
    <h1 >{user_name}</h1>
    </div>
  );
}
export default NavImage