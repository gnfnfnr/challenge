import React, { useEffect, useRef } from "react";
import style from "styled-components";
const MapContainer = style.div`
  width: 100%;
  height: 314px;
  @media only screen and (max-width: 500px) {
      height: 224px;
    }
`;

const { kakao } = window;
function Map({ keyword, setData }) {
  const mapRef = useRef();
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 표시할 div
    const option = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(container, option); // 지도를 생성합니다
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setData(data);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, []);
  return <MapContainer id="map" ref={mapRef} />;
}

export default Map;
