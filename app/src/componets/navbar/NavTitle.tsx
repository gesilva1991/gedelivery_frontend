
interface NavigationTitleProps {
  title: string;
}
const NavTitle = ({ title }: NavigationTitleProps) => {
  return (
    <div className="self-stretch my-auto text-2xl font-medium text-white">
      {title}
    </div>
  );
}
export default NavTitle