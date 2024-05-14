import { signOut } from "firebase/auth";
import FrameFlickLogo from "../assets/svg/logo.svg";
import { auth } from "../firebase/config";

function Navbar() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar justify-between">
      <a>
        <img src={FrameFlickLogo} width="10%" alt="FrameFlickLogo" />
      </a>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}

export default Navbar;
