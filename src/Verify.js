import axios from "axios";
// 리소스 접근 허용
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// 서로 다른 도메인간 쿠키 전달 허용
axios.defaults.withCredentials = true;

function Verify(props) {
  axios
    .post(
      "https://api.iamport.kr/users/getToken",
      {
        imp_key: "2814355220702142", // REST API키
        imp_secret:
          "ZL3UCY9Yz7T47tbIXN0YzOox6kxROzIj0rTVU7x1eVZbGhEv29IrWsAPeE7ZX1V5xkglClSdG0Eb0jiv", // REST API Secret
      },
      { withCredentials: true }
    )
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

export default Verify;

// url: "https://api.iamport.kr/users/getToken",
//     method: "post", // POST method
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Credentials": true,
//     },
//     "Access-Control-Allow-Origin": "https://api.iamport.kr",

//     data: {
//       imp_key: "2814355220702142", // REST API키
//       imp_secret:
//         "ZL3UCY9Yz7T47tbIXN0YzOox6kxROzIj0rTVU7x1eVZbGhEv29IrWsAPeE7ZX1V5xkglClSdG0Eb0jiv", // REST API Secret
//     },
