//import "./styles.css";
import React from "react";
import { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { approvalNotes } from "./data.js";
import { Button } from "@mui/material";

const gridContent = {
  display: "grid",
  //we're using a 5th middle grid item to help keep the space between the two items on each row
  gridTemplateColumns: "10em auto",
  // columnGap: "1em",
  padding: "1em",
  rowGap: "1em"
};
const gridHeader = {
  display: "grid",
  //we're using a 5th middle grid item to help keep the space between the two items on each row
  //gridTemplateColumns: "10em auto 5em 10em auto",
  gridTemplateColumns: "1fr 1fr auto 1fr 1fr",
  // columnGap: "1em",
  rowGap: "1em"
};
const gridItem = {
  paddingTop: "0.5em"
  //border: "1px solid gray"
};

const gridContentItem = {
  //padding: "0.5em",
  //border: "1px solid gray"
};

const buttonStyle = {
  // border: "3px solid gray",
  border: "3px #00646E",
  backgroundColor: "#00646E",
  marginRight: "5px",
  float: "right",
  borderRadius: "4px",
  cursor: "pointer",
  color: "white",
  width: "10%",
  textTransform: "none",
  height: "80%"
};

export default function Approvals() {
  console.log("in approvals Item");
  return (
    <div
      className="Approvals"
      style={{
        /* border: "5px solid green", */
        height: "60vh",
        padding: "0",
        margin: "0",
        overflow: "auto"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          margin: "0 0 0 0",
          padding: "0 0 0 1em",
          color: "gray",
          borderBottom: "1px solid gray"
          /*backgroundColor: "#E0e0e0"*/
        }}
      >
        <h1>Approvals</h1>
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
      {/* start header grid */}

      <div
        className="approval-header"
        style={{
          //border: "3px solid blue",
          backgroundColor: "#e0e0e0",
          padding: "1em",
          width: "100%",
          boxSizing: "border-box",
          marginTop: "2em"
        }}
      >
        {/* TODO: this needs to be created dynamically, like a header. Otherwise we keep on repeating it */}
        <div className="grid-container" style={gridHeader}>
          {/* first row */}
          <div className="grid-item" style={gridItem}>
            <label htmlFor="approval-id">Approval ID</label>
          </div>
          <div className="grid-item" style={gridItem}>
            <input
              type="text"
              name="approval-id"
              disabled
              style={{
                border: "none",
                borderBottom: "1px solid #858585",
                height: "1.5em"
              }}
            ></input>
          </div>
          <div className="grid-item" style={gridItem}>
            {/* --- */}
          </div>
          <div className="grid-item" style={gridItem}>
            <label htmlFor="priority">Priority</label>
          </div>

          <div className="grid-item" style={gridItem}>
            <input
              type="text"
              name="priority"
              style={{
                border: "none",
                borderBottom: "1px solid #858585",
                height: "1.5em"
              }}
            ></input>
          </div>
          {/* second row */}
          <div className="grid-item" style={gridItem}>
            <label htmlFor="parent-id">Parent ID</label>
          </div>
          <div className="grid-item" style={gridItem}>
            <input
              type="text"
              name="parent-id"
              style={{
                border: "none",
                borderBottom: "1px solid #858585",
                height: "1.5em"
              }}
            ></input>
          </div>
          <div className="grid-item" style={gridItem}>
            {/* --- */}
          </div>

          <div className="grid-item" style={gridItem}>
            <label htmlFor="datedue">Date Due</label>
          </div>
          <div className="grid-item" style={gridItem}>
            <input
              type="text"
              name="datedue"
              style={{
                border: "none",
                borderBottom: "1px solid #858585",
                height: "1.5em"
              }}
            ></input>
          </div>
          {/* third row */}
          <div className="grid-item" style={gridItem}>
            <label htmlFor="assignee">Assignee</label>
          </div>
          <div className="grid-item" style={gridItem}>
            <input
              type="text"
              name="assignee"
              style={{
                border: "none",
                borderBottom: "1px solid #858585",
                height: "1.5em"
              }}
            ></input>
          </div>
          <div className="grid-item" style={gridItem}>
            {/* --- */}
          </div>
          <div className="grid-item" style={gridItem}>
            <label htmlFor="status">Status</label>
          </div>
          <div className="grid-item" style={gridItem}>
            <input
              type="text"
              name="status"
              style={{
                border: "none",
                borderBottom: "1px solid #858585",
                height: "1.5em"
              }}
            ></input>
          </div>
        </div>
      </div>
      {/* end header grid */}
      {/* ----------------Add tabs here ------------------- 
        including isVisible etc
      
      */}

      {/* start container grid */}
      <ContentGrid />

      {/* end container grid */}
    </div>
  );
}

const ContentGrid = () => {
  return (
    <div
      className="approval-content"
      style={{
        //border: "3px solid red",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        marginTop: "3em"
      }}
    >
      <div className="grid-content" style={gridContent}>
        <div className="grid-item" style={gridContentItem}>
          <label htmlFor="title">Title</label>
        </div>
        <div className="grid-item" style={gridContentItem}>
          <input
            type="text"
            name="title"
            placeholder="Approval Title"
            style={{
              width: "100%",
              boxSizing: "border-box",
              border: "none",
              borderBottom: "1px solid #858585",
              height: "1.5em"
            }}
          ></input>
        </div>
        <div className="grid-item" style={gridContentItem}>
          <label htmlFor="description">Description</label>
        </div>
        <div className="grid-item" style={gridContentItem}>
          <textarea
            id="description"
            name="description"
            rows="5"
            style={{
              boxSizing: "border-box",
              width: "100%",
              border: "1px solid #858585"
            }}
          />
        </div>

        <div className="grid-item" style={gridContentItem}>
          <label htmlFor="conversations">Conversations</label>
        </div>
        <div className="grid-item" style={gridContentItem}>
          <div
            style={{
              width: "100%",
              height: "7em",
              //border: "1px solid gray",
              overflow: "auto",
              backgroundColor: "#FFFFFF",
              border: "1px solid #858585"
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
              {approvalNotes.map((appr) => {
                return (
                  <li
                    key={appr.id}
                    style={{
                      display: "inline-flex",
                      margin: "0",
                      borderBottom: "1px solid gray",
                      paddingTop: "0.5em",
                      paddingBottom: "0.5em"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ededed",
                        margin: "1em",
                        padding: "0.5em"
                      }}
                    >
                      <label icon="person"></label>
                      {appr.username}
                    </div>
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E0E0E0",
                        margin: "1em",
                        padding: "0.5em"
                      }}
                    >
                      {appr.desc}
                    </div>
                    <div
                      style={{
                        //backgroundColor: "#E0E0E0",
                        margin: "1em",
                        padding: "0.5em",
                        fontWeight: "bold"
                      }}
                    >
                      {appr.timestamp}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div
            className="conv-buttons"
            style={{
              display: "flex",
              flexDirection: "row",

              backgroundColor: "#e0e0e0",
              margin: "0",
              padding: "0",
              height: "5em"
            }}
          >
            <button style={{ width: "5em", margin: "0.5em" }}>User</button>
            <button style={{ width: "100%" }}>Notes</button>
            <button style={{ width: "10em" }}>Timestamp</button>
          </div> */}
        </div>
        <div className="grid-item" style={gridContentItem}>
          <label htmlFor="conversations">
            <Button style={Object.assign({}, buttonStyle, { width: "90%" })}>
              View History
            </Button>
          </label>
        </div>
        <div
          className="grid-item"
          style={Object.assign({}, gridContentItem, {
            display: "flex",
            justifyContent: "right",
            width: "100%"
          })}
        >
          <Button style={buttonStyle}>Save</Button>
          <Button style={buttonStyle}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};
