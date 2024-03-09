import '../scss/partials/NavBar.scss'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/your-logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <button className="nav-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
