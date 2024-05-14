// import Logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5691695/pexels-photo-5691695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Frame Flick.</h1>
            <p className="mb-5">Chaque moment, une histoire à partager. 👀</p>
            <button className="btn btn-primary">
              <Link to="/login">Découvrir</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
