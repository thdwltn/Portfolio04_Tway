import { Link } from "react-router-dom";
import {
  BiHome,
  BiMenu,
  BiMessageRoundedDots,
  BiSearch
} from "react-icons/bi";
function Footer(){
  return(
    <footer>
    <ul>
      <li>
       <Link to="/"><BiHome /></Link>
      </li>
      <li>
        <Link to="/list">
          <BiMenu />
        </Link>
      </li>
      <li>
        <Link to="/Review">
          <BiMessageRoundedDots />
        </Link>
      </li>
      <li>
        <Link to="/Search">
          <BiSearch />
        </Link>
      </li>
    </ul>
  </footer>
  )
}

export default Footer;