//import "./styles.css";

import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import "./styles.css";

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
  gridTemplateColumns: "10em auto 5em 10em auto",
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

export default function Tasks() {
  console.log("in tasks Item");

  return (
    <div
      className="Tasks"
      style={{
        border: "1px solid lightgray",
        height: "100%",
        padding: "0",
        //marginTop: "2%",
        //marginBottom: "2%",
        overflow: "auto"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "1%"
        }}
      >
        {/* heading or some text goes here - gray bar under tab*/}
        <h1>Tasks</h1>
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
          boxSizing: "border-box"
        }}
      >
        {/* TODO: this needs to be created dynamically, like a header. Otherwise we keep on repeating it */}
        <div className="grid-container" style={gridHeader}>
          {/* first row */}
          <div className="grid-item" style={gridItem}>
            <label htmlFor="approval-id">Task ID</label>
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
            <label htmlFor="parent-id">Parent Request ID</label>
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
            <label htmlFor="status">Estimated Effort</label>
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
          {/* 4th row */}
          <div className="grid-item" style={gridItem}>
            <label htmlFor="assignee">Status</label>
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
            <label htmlFor="status">% Completed</label>
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
  const [tagValue, setTagValue] = useState();
  const [allTags, setAllTags] = useState(tagsList);

  const handleTagsAdd = (e) => {
    console.log("Tags button clicked.", tagValue);
    setAllTags(tagsList.push("summary.jpg"));
  };

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
            placeholder="Task Title"
            style={{
              width: "100%",
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
            style={{ width: "100%", border: "1px solid #858585" }}
          />
        </div>

        <div className="grid-item" style={gridContentItem}>
          <label htmlFor="conversations">Attachments</label>
        </div>
        {/* <div className="grid-item" style={gridContentItem}>
          <input
            type="text"
            name="title"
            placeholder=""
            style={{ width: "100%", height: "100%", boxSizing: "border-box" }}
          ></input>
        </div> */}
        <div
          style={{
            width: "100%",
            height: "5em",
            //border: "1px solid gray",
            border: "1px solid #858585",
            overflow: "auto",
            position: "relative",
            backgroundColor: "#ffffff",
            display: "flex"
          }}
        >
          <ChipItems />
          <AddCircleIcon
            style={{ color: "blue" }}
            onClick={(event) => handleTagsAdd(event)}
          />
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

export const ChipItems = () => {
  const handleDelete = () => {
    console.log("deleted");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start"
      }}
    >
      <Chip
        style={{ margin: "0.3em" }}
        variant="outlined"
        label="DumbledoreScreenshot.jpg"
        onDelete={handleDelete}
      />
      <Chip
        style={{ margin: "0.3em" }}
        variant="outlined"
        label="PotterCupboardNorth.jpg"
        onDelete={handleDelete}
      />
      <Chip
        style={{ margin: "0.3em" }}
        label="Thesis2_final_dec23_2019.rtf"
        onDelete={handleDelete}
      />
    </div>
  );
};

export const tagsList = [
  "DumbledoreScreenshot.jpg",
  "PotterCupboardNorth.jpg",
  "Thesis2_final_dec23_2019.rtf"
];
