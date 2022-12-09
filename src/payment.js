const 결제대기 = {
  대여비: 2000,
  보증금: 1000,
  부과세: 2000 * 0.13,
  //어떤 아이템을 빌렸는지
  borrowItem: {
    address: "서울 송파구 가락로12길 4 (석촌동, 파크팰리스)",
    barrowAvailableEnd: "2022-12-29",
    barrowAvailableStart: "2022-12-22",
    barrowMethod: "비대면",
    condition: 125,
    deposit: 4500,
    detailAddress: "34",
    explanation: "심리학 자료 팔아요~",
    id: 3,
    listPrice: 9000,
    localCity: "서울",
    localGu: "송파",
    owner: { username: "cc", nickname: "cc" },
    productName: "물건 심리학 자료",
    productPhoto: "/media/product_photo/2020-12-14.png",
    rentalFee: 1350,
  },
  //누가 빌렸는지
  borrower: { name: "123", nickname: "123", password: "123", username: "123" },
};

//결제 완료 url 예시 /borrowedItem/Payment/물건id/username=유저 이름
const pay = {
  //string 가맹점 번호
  cid: "TC0ONETIME",
  // int 대여비 + 보증금 + 부과세, 실제 결제 금액
  total_amount: 결제대기.대여비 + 결제대기.보증금 + 결제대기.부과세,
  // int 상품 부과세: (대여비 * 13%) -> 세금
  vat_amount: 결제대기.부과세,
  // int 상품 비과세 -> total_amount - vat_amount => 대여자에게 줘야할 찐 대여비
  tax_free_amount: 결제대기.대여비,
  // string 물품 결제번호
  tid: "T392fb4b3f5d49ead1df",
  // string 물품 요청 고유 번호
  aid: "A392fb5f1ce82531b41b",
  // Datetime	결제 준비 요청 시각
  created_at: "2022-12-09T18:09:31",
  // Datetime	결제 승인 시각
  approved_at: "2022-12-09T18:10:06",
};

// 결제 취소 url 예시
// 보증금 /borrowedItem/deposit/물건id/username=유저이름
const deposit = {
  //string 가맹점 번호
  cid: "TC0ONETIME",
  // Datetime	결제 준비 요청 시각
  created_at: "2022-12-09T18:09:31",
  // Datetime	결제 승인 시각
  approved_at: "2022-12-09T18:10:06",
  // Datetime	결제 취소 시각
  canceled_at: "2022-12-09T19:40:57",
  // 이번 요청으로 취소된 금액
  approved_cancel_amount: {
    discount: 0, // 중요 x
    green_deposit: 0, // 중요 x
    point: 0, // 중요 x
    tax_free: 100, // 이번 요청으로 취소된 비과세 금액
    total: 300, // 이번 요청으로 취소된 전체 금액
    vat: 18, // 이번 요청으로 취소된 부가세 금액
  },
  // 남은 취소 가능 금액
  cancel_available_amount: {
    discount: 0, // 중요 x
    green_deposit: 0, // 중요 x
    point: 0, // 중요 x
    tax_free: 100, // 이번 요청으로 취소된 비과세 금액
    total: 300, // 이번 요청으로 취소된 전체 금액
    vat: 18, // 이번 요청으로 취소된 부가세 금액
  },
};

// 대여비 /borrowedItem/rental/물건id/username=유저이름
const rental = {
  //string 가맹점 번호
  cid: "TC0ONETIME",
  // Datetime	결제 준비 요청 시각
  created_at: "2022-12-09T18:09:31",
  // Datetime	결제 승인 시각
  approved_at: "2022-12-09T18:10:06",
  // Datetime	결제 취소 시각
  canceled_at: "2022-12-09T19:40:57",
  // 이번 요청으로 취소된 금액
  approved_cancel_amount: {
    discount: 0, // 중요 x
    green_deposit: 0, // 중요 x
    point: 0, // 중요 x
    tax_free: 100, // 이번 요청으로 취소된 비과세 금액
    total: 300, // 이번 요청으로 취소된 전체 금액
    vat: 18, // 이번 요청으로 취소된 부가세 금액
  },
  // 남은 취소 가능 금액
  cancel_available_amount: {
    discount: 0, // 중요 x
    green_deposit: 0, // 중요 x
    point: 0, // 중요 x
    tax_free: 100, // 이번 요청으로 취소된 비과세 금액
    total: 300, // 이번 요청으로 취소된 전체 금액
    vat: 18, // 이번 요청으로 취소된 부가세 금액
  },
};
