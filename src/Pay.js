import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import { useNavigate } from "react-router-dom";

function Pay() {
  const [nextUrl, setNextUrl] = useState("");
  const nav = useNavigate();
  const [result, setResult] = useState();
  const [tid, setTid] = useState("");
  const onClick = async () => {
    await axios
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
        setNextUrl(res.data.next_redirect_pc_url);
        localStorage.setItem("tid", res.data.tid);
        setTid(res.data.tid);
      })
      .catch((err) => console.log(err));
    console.log("Df");
  };
  return (
    <div>
      카카오 페이
      <button onClick={onClick}>결제하기</button>
      <a href={nextUrl}>결제하러 이동하기</a>
      <button
        onClick={() => {
          let getParameter = (key) => {
            return new URLSearchParams(window.location.search).get(key);
          };
          const params = getParameter("pg_token");
          nav("/pay", {
            state: { params: params, tid: localStorage.getItem("tid") },
          });
        }}
      >
        결과
      </button>
      <button
        onClick={() => {
          axios
            .post(
              "https://kapi.kakao.com/v1/payment/cancel",
              {
                cid: "TC0ONETIME",
                tid: localStorage.getItem("tid"),
                cancel_amount: 300,
                cancel_tax_free_amount: 100,
              },

              {
                headers: {
                  Authorization: "KakaoAK b3365e5967f9f0368704e9181e0fe9d8",
                  "Content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
                },
              }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        결제 취소
      </button>
    </div>
  );
}

export default Pay;
