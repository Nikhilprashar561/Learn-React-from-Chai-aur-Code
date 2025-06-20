import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authServices from "./appWrite/auth";
import { login, logout } from "./Store/authSlice";
import {Footer, Header} from "./components"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices
      .getAccount()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : (
    <h1>
      Tere Jaisa Yaar kaha kaha Aisa Yarana yaad Kre Ge Duniya Tera Mara Hafsana
    </h1>
  );
}

export default App;
