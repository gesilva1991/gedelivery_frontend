import NavBar from "./NavBar";

interface NavigationProps {
  title: string;
  user_name: string;
}


const Navigation: React.FC<NavigationProps> = ({title, user_name}) => {

  return (
    <NavBar
      title={title} 
      logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/20a6978e71c17ee02745bcbf9788d7d09441b27d1e7790cb2f6dcc77cca16a90?placeholderIfAbsent=true&apiKey=2e7d13d000974d288a12931b26fdb2e7"
      avatarSrc="src/assets/avatar.svg"
      user_name={user_name}
    />
  );
}

export default Navigation;
