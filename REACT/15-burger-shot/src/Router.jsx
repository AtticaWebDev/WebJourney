import { BrowserRouter, Switch, Route } from "react-router-dom"; // Assurez-vous d'importer de react-router-dom
import HomePage from "./pages/HomePage.jsx";

const root = createRoot(document.getElementById("root"));

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
