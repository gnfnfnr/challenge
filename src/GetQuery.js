import React from "react";
import { useState } from "react";

function GetQuery(props) {
  const [query, setQuery] = useState();
  const params = new URLSearchParams(window.location.search);
  return <div></div>;
}

export default GetQuery;
