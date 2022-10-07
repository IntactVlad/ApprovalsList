import React from "react";
import { useState } from "react";

import { requestHeader } from "./data.js";
import Button from "@mui/material/Button";

import AddBoxIcon from "@mui/icons-material/AddBox";
import Chip from "@mui/material/Chip";
import { tagsList } from "./data.js";
import "./styles.css";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import CompassDatePickerv2 from "./Compass_DatePickerv2";

const btnEnableSaveStyle = {
  height: "3em",
  border: "0px",

  backgroundColor: "#007b87",
  /* marginLeft: "1em", */
  padding: "1em",
  paddingLeft: "2em",
  paddingRight: "2em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "#ffffff",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  width: "100%"
};

const btnDisableSaveStyle = {
  height: "3em",
  border: "0px",

  backgroundColor: "#E0E0E0",
  marginLeft: "1em",
  padding: "1em",
  paddingLeft: "2em",
  paddingRight: "2em",

  borderRadius: "4px",
  cursor: "pointer",
  color: "#FFFFFF",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  width: "100%"
};
const btnEnableCancelStyle = {
  height: "3em",
  border: "2px solid #007b87",
  /* marginRight: "1em", */
  backgroundColor: "#FFFFFF",

  padding: "1em",
  paddingLeft: "2em",
  paddingRight: "2em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "#007b87",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  width: "100%"
};

const btnDisableCancelStyle = {
  height: "3em",
  border: "2px solid #E0E0E0",
  marginRight: "1em",
  backgroundColor: "#FFFFFF",
  padding: "1em",
  paddingLeft: "2em",
  paddingRight: "2em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "#E0E0E0",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  width: "100%"
};

// ------------------------ Header styles, move to CSS file ----------------------
const gridHeader = {
  display: "grid",
  gap: "10px",
  border: "1px solid gray",
  boxShadow: "4px 5px 1px #e0e0e0",
  //we're using a 5th middle grid item to heAlp keep the space between the two items on each row
  /*   gridTemplateColumns: "10em auto 5em 10em auto", */
  // columnGap: "1em",
  //backgroundColor: "#f0f0f0",

  paddingTop: "2em",
  paddingLeft: "1em",
  paddingRight: "1em",
  paddingBottom: "2em",
  marginTop: "1em",
  marginBottom: "1em"
};
const gridItem = {
  paddingTop: "1em"
};
const gridItemLarge = {
  border: "1px solid lightgray",
  gridRow: "2 / span 2",
  gridColumn: "7",
  height: "5em",
  overflow: "auto"
};

const gridItemButton = {
  /* start / columnORrow Span */
  gridRow: "4 / span 1",
  gridColumn: "7 / span 1",
  paddingTop: "1em",
  width: "100%"
};
const inputStyle = {
  borderTop: "0",
  borderLeft: "0",
  borderRight: "0",
  borderBottom: "1px solid #E0E0E0"
};

export const Header = ({ ticket }) => {
  // ------------------------ Header component ----------------------

  const [isSaveActive, setIsSaveActive] = useState(false);
  const [isCancelActive, setIsCancelActive] = useState(false);

  const [tagValue, setTagValue] = useState();
  const [allTags, setAllTags] = useState(tagsList);

  const handleFieldChange = (e) => {
    console.log("Input changed: ", e.target.value, " >> ", e.target.name);
    setIsSaveActive(true);
    setIsCancelActive(true);
  };

  const handleTagsAdd = (e) => {
    console.log("Tags button clicked.", tagValue);
    setAllTags(tagsList.push(tagValue));
  };

  const getIndexOfValue = (value) => {
    for (let i = 0; i < tagsList.length; i++) {
      if (value === tagsList[i]) {
        console.log("found value ", value, tagsList[i]);
        const newArray = tagsList.splice(i, 1); //remove first occurrence of {value} - returns new array
        console.log("remaining ", tagsList);
        setAllTags(newArray);
      } else {
        console.log("this value is no longer there");
      }
    }
  };
  const handleTagsDelete = (tagToDelete) => {
    console.info("You clicked the delete icon.", tagToDelete);
    getIndexOfValue(tagToDelete);
  };

  const handleNewTagChange = (e) => {
    e.preventDefault();
    console.log("tag changed ", e.target.value);
    setTagValue(e.target.value);
    setIsSaveActive(true);
    setIsCancelActive(true);
  };

  /*  Snackbar and save and click buttons */
  const [open, setOpen] = React.useState(false);

  const vertical = "bottom";
  const horizontal = "right";

  const handleCancelClick = (e) => {
    console.log("clicked cancel ", e.target.value);
  };

  const handleSaveClick = (e) => {
    console.log("clicked save ", e.target.value);
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        OK
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const tagsItemsList = tagsList.map((tag) => (
    <Chip
      label={tag}
      variant="outlined"
      onDelete={() => handleTagsDelete(tag)}
    />
  ));

  return (
    <div style={{ padding: "0", margin: "0" }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Settings saved."
        action={action}
        key={{ vertical, horizontal }}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Settings Saved.
        </Alert>
      </Snackbar>
      {/* TODO: this needs to be created dynamically, like a header. Otherwise we keep on repeating it */}

      {/* <div className="grid-container" style={gridHeader}> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 0.3fr 1fr 1fr 0.3fr 2fr",
          gap: "10px"
        }}
      >
        <div className="grid-item" style={gridItem}>
          <label htmlFor="assignee">Assignee</label>
        </div>

        <div className="grid-item" style={gridItem}>
          <input
            type="text"
            name="assignee"
            style={inputStyle}
            defaultValue={requestHeader.assignee}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>

        <div>{/* filler */}</div>

        <div className="grid-item" style={gridItem}>
          <label htmlFor="priority">Priority</label>
        </div>

        <div className="grid-item" style={gridItem}>
          <input
            type="text"
            name="priority"
            style={inputStyle}
            defaultValue={requestHeader.priority}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>

        {/* filler */}
        <div>{/* filler */}</div>

        <div className="grid-item" style={gridItem}>
          <div
            style={{
              /* border: "1px solid red", */
              height: "2em",
              display: "flex",
              margin: "0",
              padding: "0",
              alignItems: "center"
            }}
          >
            {/* <span style={{ marginRight: "1em" }}>
              <label htmlFor="tags">Tags:</label>
            </span>
            <span style={{ width: "100%" }} /> */}
            <span style={{ padding: "0", margin: "0", width: "100%" }}>
              <input
                type="text"
                placeholder="Add Tag"
                style={{ width: "100%" }}
                onChange={(e) => handleNewTagChange(e)}
              />
              {/*  <span>{tagValue}</span> */}
            </span>

            <span
              style={{
                padding: "0",
                marginLeft: "1em",
                display: "flex",
                alignItems: "center"
              }}
            >
              {/* <button
                style={{ border: "0", margin: "0", padding: "0" }}
                onClick={(event) => handleTagsAdd(event)}
              > */}
              <AddBoxIcon
                color="success"
                onClick={(event) => handleTagsAdd(event)}
              />
              {/* </button> */}
            </span>
          </div>
        </div>

        <div className="grid-item" style={gridItem}>
          <label htmlFor="parent-id">Parent ID</label>
        </div>

        <div className="grid-item" style={gridItem}>
          <input
            type="text"
            name="parent-id"
            style={inputStyle}
            value={requestHeader.parentid}
          ></input>
        </div>

        <div>{/* filler */}</div>

        <div className="grid-item" style={gridItem}>
          <label htmlFor="datedue">Date Due</label>
        </div>

        <div className="grid-item" style={gridItem}>
          {/*  <input
            type="text"
            name="datedue"
            style={inputStyle}
            defaultValue={requestHeader.datedue}
            onChange={(e) => handleFieldChange(e)}
          ></input> */}
          {/*  <DatePicker /> */}
          <CompassDatePickerv2 />
        </div>

        <div>{/* filler */}</div>

        <div className="grid-item-tags" style={gridItemLarge}>
          {/* <TagComponent /> */}
          {tagsItemsList}
          {/* <textarea
            name="tags"
            style={{ width: "100%", height: "100%", boxSizing: "border-box" }}
            defaultValue={tags}
          /> */}
        </div>
        <div className="grid-item" style={gridItem}>
          <label htmlFor="request-type">Request Type</label>
        </div>

        <div className="grid-item" style={gridItem}>
          <input
            type="text"
            name="request-type"
            style={inputStyle}
            value={ticket.type.name}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>

        <div>{/* filler */}</div>

        <div className="grid-item" style={gridItem}>
          <label htmlFor="status">Status</label>
        </div>

        <div className="grid-item" style={gridItem}>
          <input
            type="text"
            name="status"
            style={inputStyle}
            value={requestHeader.status}
            onChange={(e) => handleFieldChange(e)}
          ></input>
        </div>
        <div>{/* filler */}</div>
        <div className="grid-item" style={gridItemButton}>
          {/* <div
            style={{
              display: "inline-block",
              float: "left"
            }}
          >
            <Button variant="outlined" className="button-outline">
              RESET
            </Button>
          </div> */}

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Button
              style={isSaveActive ? btnEnableSaveStyle : btnDisableSaveStyle}
              onClick={(e) => {
                isSaveActive
                  ? handleSaveClick(e, "bottom", "center")
                  : console.log("button is disabled");
              }}
            >
              SAVE
            </Button>

            <span style={{ margin: "1em" }}></span>
            <button
              style={
                isCancelActive ? btnEnableCancelStyle : btnDisableCancelStyle
              }
              onClick={(e) => handleCancelClick(e)}
            >
              CANCEL
            </button>
            {/*  <CompassSnackbar /> */}
          </div>
        </div>
      </div>
    </div>
    /* </div> */
  );
};
