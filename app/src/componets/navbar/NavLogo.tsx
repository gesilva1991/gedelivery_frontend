
interface NavigationLogoProps {
  src: string;
}

const NavLogo = ({ src }: NavigationLogoProps) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto w-8 min-h-[32px]">
      <img
        loading="lazy"
        src={src}
        alt="Navigation logo"
        className="object-contain w-7 aspect-square"
      />
    </div>
  );
}

export default NavLogo