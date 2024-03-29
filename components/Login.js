import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUser,
  isErrorSelector,
  statusSelector,
} from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const isError = useSelector(isErrorSelector);
  const status = useSelector(statusSelector);

  const handleLogin = (e) => {
    e.preventDefault();
    const userId = e.target.userId.value;
    const password = e.target.password.value;

    dispatch(loginUser({ userId, password }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Group 2 login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Group 2 login!</h1>
        <form onSubmit={handleLogin}>
          <label>
            User name:
            <input required type="text" name="userId" placeholder="User name" />
          </label>
          <label>
            Password:
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <button type="submit">Login</button>
        </form>

        {isError && <b style={{ color: "red" }}>{status}</b>}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
