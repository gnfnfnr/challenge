import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  console.log("결제23");
  console.log(state);
  const onClick = () => {
    axios
      .post(
        "https://kapi.kakao.com/v1/payment/approve",
        {
          cid: "TC0ONETIME",
          pg_token: state.params,
          tid: state.tid,
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
  };
  return <button onClick={onClick}>결제 완료</button>;
}

export default Result;
