
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-sm fixed top-0 right-0 z-50">
      <div className="container mx-auto flex justify-end">
        <Link to="/">
          <img 
            src="/lovable-uploads/583c1905-127d-45e7-afb4-e23fac576073.png" 
            alt="Decoding Data Science Logo" 
            className="h-16 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
