import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginFromLocalStorage } from "../features/auth/authSlice";
import Login from "../components/login";

function MyApp(props) {
  return (
    <Provider store={store}>
      <Navigation />
      <MainContent {...props} />
    </Provider>
  );
}

function MainContent({ Component, pageProps }) {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = window.localStorage.getItem("auth");
    if (userId) {
      dispatch(loginFromLocalStorage(userId));
    }
  }, [dispatch]);

  if (!state.userId) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
