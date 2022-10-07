import React from "react";
import Button from "@mui/material/Button";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Client = () => {
  const buttonStyle = {
    width: "20%",
    height: "100%",
    backgroundColor: "#007B87",
    border: "1px solid #007B87",
    color: "white",
    textTransform: "none",
    borderRadius: "4px"
  };
  return (
    <div className="body" style={{ height: "100%", backgroundColor: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          margin: "0 0 0 0",
          padding: "0 0 0 1em",
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
      <div
        className="searchDiv"
        style={{
          display: "flex",
          marginTop: "2%",
          marginRight: "2%",
          marginLeft: "2%",
          height: "10%"
        }}
      >
        <div
          className="searchBox"
          style={{
            width: "40%",
            borderRadius: "4px",
            backgroundColor: "#fafafa",
            border: "1px solid gray",
            display: "flex",
            alignItems: "center"
          }}
        >
          <i className="material-icons" style={{ marginLeft: "2%" }}>
            &#xE8B6;
          </i>
          <input
            placeholder="Search"
            style={{
              border: "3px",
              height: "70%",
              width: "90%",
              outline: "none",
              padding: "2%"
            }}
          ></input>
        </div>

        <Button
          className="advancedSearchButton"
          style={Object.assign({}, buttonStyle, { marginLeft: "24%" })}
        >
          Advanced Search
        </Button>
        <Button
          className="createEditButton"
          style={Object.assign({}, buttonStyle, { marginLeft: "2%" })}
        >
          Create New/Edit Client
        </Button>
        <Button
          className="clearButton"
          style={Object.assign({}, buttonStyle, { marginLeft: "2%" })}
        >
          Clear Selection
        </Button>
      </div>
      <div
        className="detailsDiv"
        style={{
          marginTop: "2%",
          marginRight: "2%",
          marginLeft: "2%",
          border: "1px solid grey",
          height: "40%",
          backgroundColor: "#ededed"
        }}
      >
        <div
          className="heading"
          style={{
            height: "5%",
            display: "flex",
            justifyContent: "center",
            margin: "1%"
          }}
        >
          <h3>Client Details</h3>
        </div>
        <div className="nameAddressDiv" style={{ width: "40%", height: "20%" }}>
          <div className="nameDiv" style={{ display: "flex", height: "50%" }}>
            <div
              style={{
                width: "20%",
                marginLeft: "2%",
                paddingLeft: "2%"
              }}
            >
              Name
            </div>
            <input
              style={{
                marginLeft: "2%",
                width: "60%",
                border: "none",
                borderBottom: "1px solid #858585"
              }}
            ></input>
          </div>
          <div
            className="addressDiv"
            style={{ display: "flex", height: "50%", marginTop: "2%" }}
          >
            <div
              style={{
                width: "20%",
                marginLeft: "2%",
                paddingLeft: "2%"
              }}
            >
              Address
            </div>
            <input
              style={{
                marginLeft: "2%",
                width: "60%",
                marginLeft: "2%",
                width: "60%",
                border: "none",
                borderBottom: "1px solid #858585"
              }}
            ></input>
          </div>
        </div>
        <div
          style={{
            marginTop: "2%",
            display: "flex",
            width: "40%",
            alignItems: "flex-start",
            marginBottom: "2%"
          }}
        >
          <Button
            style={Object.assign({}, buttonStyle, {
              width: "auto",
              marginLeft: "2%"
            })}
          >
            View Client Risk Items and Rating Exposures
          </Button>
        </div>
      </div>
      <div
        className="summaryDiv"
        style={{
          margin: "2%",
          border: "1px solid grey",
          height: "39%",
          backgroundColor: "#ededed"
        }}
      >
        <div
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1%",
            height: "5%"
          }}
        >
          <h3>Client Summary</h3>
        </div>
      </div>
    </div>
  );
};

export default Client;
