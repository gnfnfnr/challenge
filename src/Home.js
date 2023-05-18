import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Map from "./Map";
import { useState } from "react";

const HomeBox = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 60px;
  & > div {
    width: 50%;
  }
`;

const HomeSearch = styled.div`
  padding-left: 35px;
`;

const SearchInputBox = styled.div`
  background: #d9d9d9;
  border: 1px solid #467609;
  border-radius: 20px;
  display: flex;
  padding: 20px;
`;
const SearchInput = styled.input`
  all: unset;
  padding: 20px 14px;
  background: #bebbbb;
  border-radius: 20px;
`;

const SearchLabel = styled.label`
  background: #bebbbb;
`;

const SearchList = styled.ul`
  all: unset;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 20px 27px;
  background: #d9d9d9;
  border: 1px solid #bebbbb;
  border-radius: 20px;
  margin-bottom: 20px;

  &:first-child {
    margin-top: 20px;
  }
`;

const ItemTitle = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 12px;
`;

const TitleTag = styled.div`
  background: #000000;
  border: 1px solid #fffcfc;
  border-radius: 100px;
  padding: 10px 16px;
  color: #fffcfc;
`;

const TitleText = styled.span`
  font-weight: 700;
  font-size: 27px;
`;

const ItemRegion = styled.div`
  margin-bottom: 12px;
  display: flex;
  gap: 8px;
`;

const RegionText = styled.span`
  position: relative;
  padding-left: 8px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 5px;
    background: #bebbbb;
    height: 20px;
  }
`;

const ItemTime = styled.div`
  display: flex;
  gap: 8px;
`;

export default function Home() {
  const [data, setData] = useState([]);
  return (
    <>
      <Header />
      <HomeBox>
        <HomeSearch>
          <SearchInputBox>
            <SearchLabel>아이콘</SearchLabel>
            <SearchInput placeholder="동물병원을 검색해주세요" />
          </SearchInputBox>

          <SearchList>
            {data.map(({ address_name, phone, place_name }) => (
              <ListItem>
                <ItemTitle>
                  <TitleTag>진료</TitleTag>
                  <TitleText>{place_name}</TitleText>
                </ItemTitle>
                <ItemRegion>
                  <span>513m</span>
                  <RegionText>{address_name}</RegionText>
                </ItemRegion>
                <ItemTime>
                  <span>{phone}</span>
                </ItemTime>
              </ListItem>
            ))}
          </SearchList>
        </HomeSearch>
        <div>
          <Map keyword="동물병원" setData={setData} />
        </div>
      </HomeBox>
    </>
  );
}
