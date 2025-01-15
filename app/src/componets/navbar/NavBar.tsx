import NavLogo  from "./NavLogo";
import NavTitle  from "./NavTitle";
import NavImage from "./NavImage";

interface NavigationBarProps {
  title: string;
  logoSrc: string;
  imageSrc: string;
}

const NavBar = ({ title, logoSrc, imageSrc }: NavigationBarProps) => {
  return (
    <nav className="flex gap-10 justify-between items-center px-6 pt-11 pb-1.5 w-full bg-primary min-h-[117px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
      <NavLogo src={logoSrc} />
      <NavTitle title={title} />
      <NavImage src={imageSrc} />
    </nav>
  );
}

export default NavBar