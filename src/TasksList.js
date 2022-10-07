import { useState } from "react";
import React from "react";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MultiButton from "./MultiButton";
import Button from "@mui/material/Button";
import { Modal, Box } from "@mui/material";

import Tasks from "./Tasks";
import DashboardGraphs from "./DashboardGraphs";
import ColorBadge from "./ColorBadge";
import ButtonGroup from "@mui/material/ButtonGroup";

var data = require("./taskData.js");

const TaskList = (props) => {
  const buttonStyle = {
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
    alignItems: "center",
  };

  const tableBorder = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const assignButtonOptions = ["Assign...", "Close", "Delete"];
  const modifyButtonOptions = [
    "Modify View...",
    "Reorder",
    "Add/Remove Columns",
    "Save View",
  ];

  const handleClick = (e) => {
    console.log("Worked ", e.target.key);
    Tasks();
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #E0E0E0",
    height: "70%",
    textAlign: "center",
  };

  const [tasksModalOpen, setTasksModalOpen] = React.useState(false);
  const handleOpen = () => setTasksModalOpen(true);
  const handleClose = () => setTasksModalOpen(false);

  // Checkbox handlers starts
  const [isChecked, setIsChecked] = useState();

  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const handleHeaderCheckBoxOnChange = (event) => {
    setIsHeaderChecked(!isHeaderChecked);
    setIsChecked(!isChecked);
    const newState = data.taskList.map((obj) => {
      return !isHeaderChecked;
    });
    setCheckedState(newState);
  };

  const [checkedState, setCheckedState] = useState(
    new Array(data.taskList.length).fill(false)
  );

  const handleCheckBoxOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, key) =>
      key === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }; //  Checkbox handlers ends

  //Enable or Disable buttons
  const checkedCount = checkedState.filter((value) => value === true).length;
  const isDisabled = checkedCount > 1 ? false : true;
  console.log("Button disabled ", isDisabled);

  return (
    <div style={{ height: "100%", backgroundColor: "white" }}>
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
          padding: "1em",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 1em 0 auto",
          }}
        >
          <HelpOutlineIcon />
        </div>
      </div>
      <div style={{ margin: "2%", height: "5%" }}>
        <select
          name="dashboard"
          id="dashboard"
          style={{
            border: "0",
            borderBottom: "3px solid lightgrey",
            height: "2em",
            width: "15em",
            display: "block",
          }}
        >
          <option defaultValue="zero">Dashboard</option>
          <option value="one">view 1</option>
          <option value="two">view 2</option>
          <option value="three">view 3</option>
          <option value="four">view 4</option>
        </select>
      </div>
      <div
        style={{
          border: "1px solid lightgrey",
          height: "25%",
          margin: "2%",
        }}
      >
        <DashboardGraphs />
      </div>
      <div
        style={{
          height: "5%",
          margin: "2%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select
          name="dashboard"
          id="dashboard"
          style={{
            border: "0",
            borderBottom: "3px solid lightgrey",
            height: "2em",
            width: "15em",
            float: "left",
            display: "block",
          }}
        >
          <option defaultValue="zeo">All Tasks</option>
          <option value="one">view 1</option>
          <option value="two">view 2</option>
          <option value="three">view 3</option>
          <option value="four">view 4</option>
        </select>

        <div style={{ marginLeft: "auto" }}>
          <Button style={buttonStyle} value="add-task" onClick={handleOpen}>
            Add Task
          </Button>
          <MultiButton options={modifyButtonOptions} disabled={isDisabled} />
          <MultiButton options={assignButtonOptions} disabled={isDisabled} />
        </div>
      </div>
      {/* ------------------- MODAL ------------------------*/}
      <Modal
        open={tasksModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Tasks />
        </Box>
      </Modal>

      <div
        className="table"
        style={{
          height: "40%",
          margin: "2%",
        }}
      >
        <table style={tableBorder}>
          <thead>
            <tr
              style={{
                backgroundColor: "#E0E0E0",
                height: "3em",
                margin: "0",
                padding: "0",
              }}
            >
              <th
                colSpan="2"
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <input
                  id="header-checkbox"
                  checked={isHeaderChecked}
                  onChange={(event) => handleHeaderCheckBoxOnChange(event)}
                  type={"checkbox"}
                ></input>
              </th>
              <th colSpan="2">Assignee</th>
              <th colSpan="2">Date Due</th>
              <th colSpan="2">Task Title</th>
              <th colSpan="2">Priority</th>
              <th colSpan="2">Status</th>
              <th colSpan="2">Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.taskList.map((value, key) => {
              return (
                <tr
                  id={value.id}
                  key={key}
                  onClick={(e) => handleClick(e)}
                  style={{ borderBottom: "1px solid lightgrey" }}
                >
                  <td
                    colSpan="2"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    <input
                      id={value.id}
                      type={"checkbox"}
                      checked={checkedState[key]}
                      onChange={() => handleCheckBoxOnChange(key)}
                    ></input>
                  </td>
                  <td colSpan="2">{value.approval.assignee}</td>
                  <td colSpan="2">{value.approval.dateDue}</td>
                  <td colSpan="2">{value.approval.apprTitle}</td>
                  <td colSpan="2">
                    <ColorBadge status={value.approval.priority} />
                  </td>
                  <td colSpan="2">
                    <ColorBadge status={value.approval.status} />
                  </td>
                  <td colSpan="2">{value.approval.progress}</td>
                  <td>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button style={{ color: "green" }}>Close</Button>{" "}
                      <Button style={{ color: "red" }}>Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
