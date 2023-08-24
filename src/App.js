import {useContext} from "react";
import AuthContext from "./Store/Auth-context";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";


function App() {
  const ctx = useContext(AuthContext);
  console.log("ctx",ctx)
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;