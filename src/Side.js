import './Side.css'

function Side(){
  return(
    <div className="leftHome">
        <img src="/images/tway.jpg" />
        <ul>
          <li>
            <img src="./images/QR.jpg" />
          </li>
          <li>
            <b>앱 설치</b>하고
            <br />
            <b>특별 할인</b>받기
            <br />
            <i>다운로드로 연결됩니다.</i>
          </li>
        </ul>
      </div>
  )
}

export default Side;