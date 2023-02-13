import { Link } from "react-router-dom";
import {
  BiHome,
  BiMenu,
  BiMessageRoundedDots,
  BiSearch
} from "react-icons/bi";
import './Aside.css'





function Aside(){
  return(
    <aside>
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
  </aside>
  )
}

export default Aside;