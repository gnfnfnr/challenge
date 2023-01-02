import axios from "axios";
import React from "react";

function Send() {
  return (
    <div>
      <button
        onClick={() => {
          axios
            .get("https://testapi.openbanking.or.kr/oauth/2.0/authorize", {
              params: {
                response_type: "code",
                client_id: "24bf8ff3-c091-4a26-bb7b-1be39c842b51",
                redirect_uri: "http://localhost:3000",
                scope: "login inquiry transfer",
                state: "12341234",
                auth_type: "0",
              },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        송금하기
      </button>
    </div>
  );
}

export default Send;
