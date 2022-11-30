import axios from "axios";
import { useState } from "react";
import Verify from "./Verify";

function App() {
  const [nextUrl, setNextUrl] = useState("");
  const onClick = () => {
    const { IMP } = window;
    IMP.init("imp06863656");
    const data = {
      // pg: "kakaopay", // PG사
      // pay_method: "card", // 결제수단
      // merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      // amount: 200, // 결제금액
      // name: "홈런볼", // 주문명
      // buyer_name: "123", // 구매자 이름
      // buyer_tel: "01012341234", // 구매자 전화번호
      // buyer_email: "example@example", // 구매자 이메일
      // buyer_addr: "신사동 661-16", // 구매자 주소
      // buyer_postcode: "06018", // 구매자 우편번호
    };
    IMP.request_pay(data, callback);
    function callback(rsp) {
      console.log(rsp);
      // 현아의 백엔드 파트
      // axios({
      //   url: "{서버의 결제 정보를 받는 endpoint}", // 예: https://www.myservice.com/payments/complete
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   data: {
      //     imp_uid: rsp.imp_uid,
      //     merchant_uid: rsp.merchant_uid,
      //   },
      // }).then((data) => {
      //   // 서버 결제 API 성공시 로직
      // });
    }
    // Verify();
  };

  return (
    <div>
      카카오 페이
      <button onClick={onClick}>결제하기</button>
    </div>
  );
}

export default App;
