import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <h1>Profile</h1>
        <p>Department of Computer Education</p>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/edu">Education</Link>
        <Link to="/act">Activity</Link>
        <Link to="/form">Form</Link>
        
      </nav>
    </header>
  );
};

export default Header;
