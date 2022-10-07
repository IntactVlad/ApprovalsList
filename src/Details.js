import React from "react";
import "./styles.css";

import Button from "@mui/material/Button";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import Chip from "@mui/material/Chip";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import HistoryList from "./HistoryList";
import { detailsFiller } from "./data.js";

const buttonStylePrimary = {
  //border: "3px solid gray",
  height: "3em",
  border: "0",
  marginRight: "1em",
  backgroundColor: "#007B87",
  marginLeft: "1em",
  padding: "0.7em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "#ffffff",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center"
};

export default function Details() {
  return (
    <div className="details-div">
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          margin: "0 0 0 0",
          padding: "1em 0 1em 0 ",
          /* paddingTop: "1em",
          paddingBottom: "1em", */
          borderBottom: "1px solid gray",
          backgroundColor: "#E0E0E0",
          color: "gray"
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
        className="details-container"
        style={{
          backgroundColor: "#FFFFFF",
          margin: "0em",
          padding: "1em",
          height: "100%"
        }}
      >
        <div
          className="details-title"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "start",
            marginTop: "1em"
          }}
        >
          <label
            style={{
              display: "flex",
              justifyContent: "left",
              width: "10em"
            }}
          >
            Title
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              border: "0",
              borderBottom: "1px solid #E0E0E0"
            }}
            defaultValue={detailsFiller.title}
            /* we would have an onChange here that updates with state*/
          />
        </div>
        <div
          className="details-description"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "start",
            marginTop: "2em"
          }}
        >
          <label
            style={{
              display: "flex",
              justifyContent: "left",
              width: "10em"
              /* border: "1px solid red" */
            }}
          >
            Description
          </label>
          <textarea
            style={{ width: "100%" }}
            rows="10"
            placeholder="enter description of task"
            defaultValue={detailsFiller.desc}
          />
        </div>

        <div
          className="details-attachments"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "start",
            marginTop: "2em"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              flexDirection: "row"
            }}
          ></div>
          <label
            style={{
              display: "flex",
              justifyContent: "left",
              width: "10em"
              /* border: "1px solid blue" */
            }}
          >
            Attachments
          </label>
          <div
            style={{
              width: "100%",
              height: "5em",
              border: "1px solid gray",
              overflow: "auto",
              position: "relative",
              backgroundColor: "#ffffff"
            }}
          >
            <ChipItems />
            <Button
              value="button"
              variant="outlined"
              style={{ position: "absolute", top: "0", right: "0" }}
            >
              <AddCircleIcon />
            </Button>
          </div>
        </div>
        <div
          className="functional-buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            margin: "2em 0em 1em 0em"
            /* border: "1px solid red" */
          }}
        >
          <Button
            value="delete"
            variant="outlined"
            color="error"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            Cancel
          </Button>
          <Button style={buttonStylePrimary} value="button">
            Save
          </Button>
        </div>
        <div style={{ paddingTop: "1em" }}>
          <hr />
        </div>
        <div
          className="details-history"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "start",
            marginTop: "2em"
          }}
        >
          <label
            style={{
              width: "10em",
              /* border: "1px solid tomato", */
              display: "flex",
              justifyContent: "left"
            }}
          >
            History
          </label>

          <HistoryList />
        </div>
      </div>
    </div>
  );
}

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
