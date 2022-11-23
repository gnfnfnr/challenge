import axios from "axios";
import { useState } from "react";

function App() {
  const [nextUrl, setNextUrl] = useState("");
  const onClick = () => {
    axios
      .post(
        "https://kapi.kakao.com/v1/payment/ready",
        {
          cid: "TC0ONETIME",
          partner_order_id: "partner_order_id",
          partner_user_id: "partner_user_id",
          item_name: "초코파이",
          quantity: 1,
          total_amount: 2200,
          vat_amount: 200,
          tax_free_amount: 0,
          approval_url: "http://localhost:3000/",
          fail_url: "http://localhost:3000/",
          cancel_url: "http://localhost:3000/",
        },
        {
          headers: {
            Authorization: "KakaoAK b3365e5967f9f0368704e9181e0fe9d8",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data.next_redirect_pc_url);
        setNextUrl(res.data.next_redirect_pc_url);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      카카오 페이
      <button onClick={onClick}>결제하기</button>
      <a href={nextUrl}>결제하러 이동하기</a>
    </div>
  );
}

export default App;
