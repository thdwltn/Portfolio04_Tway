import { Link } from "react-router-dom";
import { BiCart,BiUser } from "react-icons/bi";
import './Header.css'

function Header(){
  return (
    <header>
      <nav>
        <h1><Link to="/">
              <img src="/images/top_logo.png" />
            </Link></h1>
        <ul>
          <li>
            <Link to="/user">
              <BiUser/>
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
