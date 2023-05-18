import React from "react";
import styled from "styled-components";

const HeaderBox = styled.nav`
  color: #796b5d;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  font-size: 20px;
`;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  margin: 40px;
  padding: 0;
  justify-content: flex-end;
  gap: 24px;
`;

export default function Header() {
  return (
    <HeaderBox>
      <HeaderList>
        <li>내 정보</li>
        <li>과거 내역</li>
        <li>동물 추가하기</li>
      </HeaderList>
    </HeaderBox>
  );
}
