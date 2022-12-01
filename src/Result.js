import React from "react";
import axios from "axios";
import { useState } from "react";
function Result({ tid }) {
  let getParameter = (key) => {
    return new URLSearchParams(window.location.search).get(key);
  };
  const params = getParameter("pg_token");
  console.log("결제");
  axios
    .post(
      "https://kapi.kakao.com/v1/payment/approve",
      {
        cid: "TC0ONETIME",
        pg_token: params,
        tid: tid,
        partner_order_id: "partner_order_id",
        partner_user_id: "partner_user_id",
      },
      {
        headers: {
          Authorization: "KakaoAK b3365e5967f9f0368704e9181e0fe9d8",
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  return <div>결제 완료</div>;
}

export default Result;
