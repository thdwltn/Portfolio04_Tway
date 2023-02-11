import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

function Header(){
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src="/images/top_logo.png" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <BiCart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
