import React from "react";
import { historyList } from "./data.js";

const HistoryList = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "7em",
        border: "1px solid gray",
        overflow: "auto",
        backgroundColor: "#FFFFFF"
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: "0 0 0 0 ",
          padding: "0 0 0 0 "
        }}
      >
        {historyList.map((hist) => {
          return (
            <li
              key={hist.id}
              style={{
                display: "inline-flex",
                margin: "0",
                borderBottom: "1px solid gray",
                paddingTop: "0.5em",
                paddingBottom: "0.5em"
              }}
            >
              {hist.date} - {hist.desc}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HistoryList;
