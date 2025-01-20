import NavLogo  from "./NavLogo";
import NavTitle  from "./NavTitle";
import NavImage from "./NavAvatar";

interface NavigationBarProps {
  title: string;
  logoSrc: string;
  avatarSrc: string;
  user_name: string;
}

const NavBar:any = ({ title, logoSrc, avatarSrc, user_name }: NavigationBarProps) => {
  return (
    <nav className="flex gap-10 justify-between items-center px-6 pt-11 pb-1.5 w-full bg-primary min-h-[117px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
      <NavLogo src={logoSrc} />
      <NavTitle title={title} />
      <NavImage src={avatarSrc} user_name={user_name} />
    </nav>
  );
}

export default NavBar