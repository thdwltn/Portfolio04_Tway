import { Link } from "react-router-dom";
import './User.css'


function User() {
    return <div className="User">
              <h3>로그인</h3>
      <div>
        <input type="text" placeholder="ID"/>
        <input type="password" placeholder="PASSWORD"/>
        <div>
        <button type="submit">로그인</button>
        <button type="submit"><Link to="signIn">회원가입</Link></button>
        </div>
      </div>

    </div>
  }
  
  export default User;
  