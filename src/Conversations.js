import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Conversations = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          margin: "0 0 0 0",
          padding: "1em 0 1em 0 ",
          borderBottom: "1px solid gray",
          backgroundColor: "#E0e0e0",
          color: "gray",
          padding: "1em"
        }}
      >
        {/* heading or some text goes here - gray bar under tab*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 1em 0 auto"
          }}
        >
          <HelpOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Conversations;
