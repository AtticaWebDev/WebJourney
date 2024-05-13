import FrameFlickLogo from "../assets/svg/logo.svg";

function Navbar() {
  return (
    <div className="navbar bg-base-100 justify-between">
      <a>
        <img src={FrameFlickLogo} width="10%" alt="FrameFlickLogo" />
      </a>
      <button>Se déconnecter</button>
    </div>
  );
}

export default Navbar;
