import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirigez l'utilisateur vers la page d'accueil après la connexion
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginWithEmailAndPassword(email, password);
  };

  return (
    <form data-theme="light" onSubmit={handleSubmit}>
      {error && <div className="text-red-500">{error}</div>}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Connecte-toi. ✌️</h1>
            <p className="py-6">
              Tu n'as pas encore de compte sur{" "}
              <span className="font-extrabold">
                <Link to="/signup">Frame Flick ?</Link>
              </span>
            </p>
          </div>
          <div className="card sm:w-[30rem]  bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mot de Passe</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Se Connecter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
