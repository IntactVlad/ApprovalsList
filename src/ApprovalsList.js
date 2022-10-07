import React from "react";
import "./styles.css";
import { useState } from "react";
import Approvals from "./Approvals";
/* import ApprovalsModal from "./ApprovalsModal"; */
import MultiButton from "./MultiButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DashboardGraphs from "./DashboardGraphs";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ColorBadge from "./ColorBadge";
import ButtonGroup from "@mui/material/ButtonGroup";

/* Objects */

let approvalList = [
  {
    id: 1,
    approval: {
      assignee: "Rubeus Hagrid",
      dateDue: "01/20/2022",
      apprTitle: "Descendants And Cats",
      priority: "Medium",
      status: "Issued",
      progress: "In Progress"
    }
  },
  {
    id: 2,
    approval: {
      assignee: "Sirius Black",
      dateDue: "01/20/2022",
      apprTitle: "The Strange Theory of Light and Matter",
      priority: "High",
      status: "Re-issued",
      progress: "In Progress"
    }
  },
  {
    id: 3,
    approval: {
      assignee: "Harry Potter",
      dateDue: "01/20/2022",
      apprTitle: "Ideas And Opinions",
      priority: "Low",
      status: "Renewal",
      progress: "Completed"
    }
  },
  {
    id: 4,
    approval: {
      assignee: "Albus Dumbledore",
      dateDue: "01/20/2022",
      apprTitle: "The Structure of Scientific Revolutions",
      priority: "Medium",
      status: "Closed",
      progress: "Completed"
    }
  },
  {
    id: 5,
    approval: {
      assignee: "Dudley Dursley",
      dateDue: "01/20/2022",
      apprTitle: "A Brief History of Time",
      priority: "Medium",
      status: "Endorsement",
      progress: "In Progress"
    }
  }
];

/* styles */

const tableBorder = {
  borderCollapse: "collapse",
  width: "100%"
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #E0E0E0",
  height: "70%"
};

const cardStyle = {
  border: "1px solid gray",
  backgroundColor: "white",
  boxShadow: "5px, 20px",
  margin: "1em",
  padding: "1em",
  height: "15em",
  width: "10em",
  boxShadow: "5px 5px 5px gray"
};

const buttonStyle = {
  border: "3px solid #007B87",
  height: "2em",
  backgroundColor: "#ffffff",
  marginLeft: "1em",
  padding: "0.7em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "#007B87",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center"
};
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
const buttonStyleDanger = {
  height: "2.5em",
  border: "3px solid red",
  backgroundColor: "transparent",
  marginLeft: "1em",
  padding: "0.7em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "gray",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center"
};

const buttonStyleWarning = {
  height: "2.5em",
  border: "3px solid #c59100",
  backgroundColor: "transparent",
  marginLeft: "1em",
  padding: "0.7em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "gray",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center"
};

// export const TableField = ({
//   id: apprId,
//   type,
//   label1,
//   label2,
//   label3,
//   label4,
//   label5,
//   style
// }) => {
//   //console.log("--- Approval: ", apprId, " >> ", label1);
//   if (type === "header") {
//     console.log("got header");
//     return (
//       <>
//         <th
//           style={{
//             textAlign: "center",
//             height: "3em",
//             paddingLeft: "0em",

//             width: "2em",

//             backgroundColor: "#E0E0E0"
//           }}
//         >
//           <input
//             type="checkbox"
//             style={{
//               width: "3em",
//               padding: "0",
//               margin: "0"
//             }}
//           />
//         </th>
//         <th style={{ backgroundColor: "#E0E0E0" }}>{label1}</th>
//         <th style={{ backgroundColor: "#E0E0E0" }}>{label2}</th>
//         <th style={{ backgroundColor: "#E0E0E0" }}>{label3}</th>
//         <th style={{ backgroundColor: "#E0E0E0" }}>{label4}</th>
//         <th style={{ backgroundColor: "#E0E0E0" }}>{label5}</th>
//       </>
//     );
//   } else {
//     console.log("got data ", label4, { label4 });
//     return (
//       <tr
//         style={{
//           height: "3em",
//           borderBottom: "1px solid #E0E0E0",
//           /* border: "1px solid black", */
//           backgroundColor: "#FFFFFF"
//         }}
//       >
//         <td
//           style={{
//             width: "3em",
//             /*  border: "1px solid green", */
//             textAlign: "center"
//           }}
//         >
//           <input type="checkbox" />
//         </td>
//         <td
//           id="assignee"
//           style={{
//             width: "15em",
//             /* border: "1px solid green", */
//             textAlign: "left"
//           }}
//         >
//           {label1}
//         </td>
//         <td
//           id="date-due"
//           style={{
//             width: "5em",
//             /* border: "1px solid green", */
//             textAlign: "left"
//           }}
//         >
//           {label2}
//         </td>
//         <td
//           id="approval-title"
//           style={{
//             width: "15em",
//             /* border: "1px solid green", */
//             textAlign: "right"
//           }}
//         >
//           {label3}
//         </td>
//         <td
//           id="priority"
//           style={{
//             width: "5em"
//             /* border: "1px solid green" */
//           }}
//         >
//           <ColorBadge status={label4} />
//         </td>
//         <td
//           id="status"
//           style={{
//             width: "5em"

//             /*             border: "1px solid green" */
//           }}
//         >
//           <ColorBadge status={label5} />
//         </td>
//       </tr>
//     );
//   }
// };

// const approvalsTableData = approvalList.map((data) => (
//   <TableField
//     id={data.id}
//     key={data.id}
//     type="record"
//     label1={data.approval.assignee}
//     label2={data.approval.dateDue}
//     label3={data.approval.apprTitle}
//     label4={data.approval.priority}
//     label5={data.approval.status}
//   />

//   //<li key={data.id}>{data.approval.assignee}</li>
// ));

export default function ApprovalsList() {
  /* set up and change for panel visibility */
  const [visiblePanel, setVisiblePanel] = useState("add-approvals");

  const assignButtonOptions = ["Assign...", "Close", "Delete"];
  const modifyButtonOptions = [
    "Modify View...",
    "Reorder",
    "Add/Remove Columns",
    "Save View"
  ];
  /* MODAL */
  const [approvalsModalOpen, setApprovalsModalOpen] = React.useState(false);
  const handleOpen = () => setApprovalsModalOpen(true);
  const handleClose = () => setApprovalsModalOpen(false);

  const handleClickListener = (e) => {
    console.log("clicked! ", e.target.value);
    //toggle
    if (e.target.value === visiblePanel)
      //already active
      setVisiblePanel("");
    else setVisiblePanel(e.target.value);
  };

  const isPanelActive = (panel) => {
    console.log("panel visible", panel, visiblePanel, panel === visiblePanel);
    return panel === visiblePanel;
  };

  // Checkbox handlers starts
  const [isChecked, setIsChecked] = useState();

  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const handleHeaderCheckBoxOnChange = (event) => {
    setIsHeaderChecked(!isHeaderChecked);
    setIsChecked(!isChecked);
    const newState = approvalList.map((obj) => {
      return !isHeaderChecked;
    });
    setCheckedState(newState);
  };

  const [checkedState, setCheckedState] = useState(
    new Array(approvalList.length).fill(false)
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
    <div
      className="approvals-container"
      style={{
        /* border: "3px solid green", */ width: "100%",
        backgroundColor: "white",
        padding: "0"
      }}
    >
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
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "3em",
          backgroundColor: "#FFFFFF",
          paddingBottom: "1em",
          marginLeft: "2%"
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
            display: "block"
          }}
        >
          <option value="dashboard">Dashboard</option>
          <option value="approvals">view 1</option>
          <option value="tasks">view 2</option>
          <option value="conversations">view 2</option>
        </select>
      </div>
      {/* metrics */}
      <div
        style={{
          border: "1px solid lightgrey",
          height: "25%",
          backgroundColor: "#FFFFFF",
          margin: "2%",
          marginTop: "0%"
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
          alignItems: "center"
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
            display: "block"
          }}
        >
          <option defaultValue="zeo">All Approvals</option>
          <option value="one">view 1</option>
          <option value="two">view 2</option>
          <option value="three">view 3</option>
          <option value="four">view 4</option>
        </select>

        {/* <Button style={buttonStyle}>Assign</Button>
        <Button style={buttonStyle}>Reorder</Button>
        <Button style={buttonStyle}>Close</Button>
        <Button style={buttonStyle}>Delete</Button> */}
        {/* <div style={{ float: "right" }}> */}
        <div style={{ marginLeft: "auto" }}>
          <Button
            style={buttonStylePrimary}
            value="add-approval"
            onClick={handleOpen}
          >
            Add Approval
          </Button>
          <MultiButton options={modifyButtonOptions} disabled={isDisabled} />
          <MultiButton options={assignButtonOptions} disabled={isDisabled} />
        </div>
      </div>
      {/* ------------------- MODAL ------------------------*/}
      <Modal
        open={approvalsModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Approvals />
        </Box>
      </Modal>

      <div className="approvalsView">
        {isPanelActive("delete") && (
          <div
            style={{
              height: "5em",
              border: "3px solid gray",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            <h1>delete</h1>
          </div>
        )}
        {isPanelActive("add-approval") && <Approvals />}

        {/* {isPanelActive("add-approval") && <ApprovalsModal />} */}
      </div>
      <div
        className="table"
        style={{
          height: "40%",
          // border: "1px solid grey",
          margin: "2%"
        }}
      >
        <table style={tableBorder}>
          <thead>
            <tr
              style={{
                backgroundColor: "#E0E0E0",
                height: "3em",
                margin: "0",
                padding: "0"
              }}
            >
              <th
                colSpan="2"
                style={{ textAlign: "center", verticalAlign: "middle" }}
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
              <th colSpan="3">Priority</th>
              <th colSpan="3">Status</th>
              <th colSpan="2">Progress</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvalList.map((value, key) => {
              return (
                <tr key={key} style={{ borderBottom: "1px solid lightgrey" }}>
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
                  <td colSpan="3">
                    <ColorBadge status={value.approval.priority} />
                  </td>
                  <td colSpan="3">
                    <ColorBadge status={value.approval.status} />
                  </td>
                  <td colSpan="2">{value.approval.progress}</td>
                  <td colSpan="2">
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
}
