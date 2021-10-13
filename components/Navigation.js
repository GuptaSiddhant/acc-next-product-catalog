import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userIdSelector, logoutUser } from "../features/auth/authSlice";
import styles from "../styles/Home.module.css";

export default function Navigation() {
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const handleLogOut = () => {
    dispatch(logoutUser({ userId }));
  };

  if (!userId) return null;

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/quotes">
            <a>Quotes</a>
          </Link>
        </li>
        <li>
          <button onClick={handleLogOut}>Log out</button>
        </li>
      </ul>
    </nav>
  );
}
