import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import SquareIcon from "@mui/icons-material/Square";

const labelStyle = {
  width: "80%",
  textAlign: "left"
};

const divStyle = {
  // width: "3em",
  // height: "2em",
  //marginLeft: "auto",
  //marginRight: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const iconStyle = {
  width: "50%",
  marginLeft: 0
};

const iconDivStyle = {
  width: "20%"
};
const ColorBadge = ({ status }) => {
  console.log("status : ", status);

  if (status === "High")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <CircleIcon
            style={Object.assign({}, iconStyle, { color: "#ff1500" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Medium")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <CircleIcon
            style={Object.assign({}, iconStyle, { color: "#ffe81a" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Low")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <CircleIcon
            style={Object.assign({}, iconStyle, { color: "#00b80f" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Low")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <CircleIcon
            style={Object.assign({}, iconStyle, { color: "#00b32d" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Issued")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <SquareIcon
            style={Object.assign({}, iconStyle, { color: "#d2f5b0" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Re-issued")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <SquareIcon
            style={Object.assign({}, iconStyle, { color: "#fcbdbd" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Endorsement")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <SquareIcon
            style={Object.assign({}, iconStyle, { color: "#ffcd85" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Renewal")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <SquareIcon
            style={Object.assign({}, iconStyle, { color: "#e3b7eb" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
  if (status === "Closed")
    return (
      <div style={divStyle}>
        <div style={iconDivStyle}>
          <SquareIcon
            style={Object.assign({}, iconStyle, { color: "#c9ccc4" })}
          />
        </div>
        <div style={labelStyle}>{status}</div>
      </div>
    );
};

export default ColorBadge;
