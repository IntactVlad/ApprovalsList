import React from "react";
import { useState } from "react";
import Details from "./Details";
import ClientInfo from "./ClientInfo";
import TasksList from "./TasksList";
import Conversations from "./Conversations";
import ApprovalsList from "./ApprovalsList";
import RequestHeader from "./RequestHeader";

/* 
const btnDisabledStyle = {
  background: '#fff',
    border: 'none',
    borderRadius: '2px solid #007b87';
     box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%); 
    minHeight: '31px',
    minWidth: '70px',
    padding: '2px 16px',
    textAlign: 'center',
    textShadow: 'none',
    textTransform: 'uppercase';
    -webkit-transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #444;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-appearance: none;
    display: inline-block;
    vertical-align: middle;
    font: 500 14px / 31px "Roboto", sans-serif !important;
    margin-bottom: 0 !important;
}; */

/* const btnEnableStyle = {
  height: "3em",
  border: "0px",
  marginRight: "1em",
  backgroundColor: "rgb(0, 123, 135)",
  marginLeft: "1em",
  padding: "0.7em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "rgb(255, 255, 255)",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  textTransform: "uppercase",

};
 */

const Requests = ({ activeItemCallback, ticket }) => {
  /* listeners and processors */
  console.log("ticket: " + ticket);
  console.log("ticket: " + ticket.type.name);

  const [visiblePanel, setVisiblePanel] = useState("details");

  const handleTabClick = (e) => {
    //already active
    console.log("target: ", e.target.value);
    if (e.target.value === visiblePanel) {
      // hide panel setVisiblePanel("");
      console.log("do Nothing! ", e.target.value, " vs active: ", visiblePanel);
    } else {
      console.log(
        "sending to callback: ",
        e.target.value,
        " vs active: ",
        visiblePanel
      );
      activeItemCallback(e.target.value);

      setVisiblePanel(e.target.value);
    }
  };

  const isPanelVisible = (panel) => {
    //console.log("panel visible", panel, visiblePanel, panel === visiblePanel);
    return panel === visiblePanel;
  };

  const isActiveTab = (tab) => {
    return isPanelVisible(tab)
      ? "requests-primary-tab-menu-active"
      : "requests-primary-tab-menu";
  };
  return (
    <div>
      <div
        className="header-container"
        style={{ paddingTop: "1em", marginRight: "2em" }}
      >
        <RequestHeader ticket={ticket} />
      </div>
      <div
        className="tabs-container"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "2em",
          margin: "0em 0em 0em 1em ",

          boxSizing: "border-box",

          //marginLeft: "1em",
          //this is for inner Divs
          justifyContent: "flex-start",
          alignContent: "flex-end",
          backgroundColor: "#ffffff"
        }}
      >
        <button
          className={isActiveTab("details")}
          /* style={tabActiveStyle} */
          value="details"
          onClick={(e) => {
            handleTabClick(e);
          }}
        >
          Details
        </button>
        <button
          className={isActiveTab("conversations")}
          /* style={tabInactiveStyle} */
          value="conversations"
          onClick={(e) => {
            handleTabClick(e);
          }}
        >
          Conversations
        </button>
        <button
          className={isActiveTab("client-information")}
          /*           style={tabInactiveStyle} */
          value="client-information"
          onClick={(e) => {
            handleTabClick(e);
          }}
        >
          Client Information
        </button>
        <button
          className={isActiveTab("tasks")}
          /* style={tabInactiveStyle} */
          value="tasks"
          onClick={(e) => {
            handleTabClick(e);
          }}
        >
          Tasks
        </button>

        <button
          className={isActiveTab("approvals")}
          /* style={tabInactiveStyle} */
          value="approvals"
          onClick={(e) => {
            handleTabClick(e);
          }}
        >
          Approvals
        </button>
        <div className="filler-tab" style={{ width: "100%" }} />
      </div>

      <div
        className="body-container"
        style={{
          minHeight: "10px",
          height: "100%",
          boxSizing: "border-box",
          marginLeft: "1em",

          backgroundColor: "#E0E0E0"
        }}
      >
        {isPanelVisible("details") && <Details />}
        {isPanelVisible("conversations") && <Conversations />}
        {isPanelVisible("client-information") && <ClientInfo />}
        {isPanelVisible("tasks") && <TasksList />}
        {isPanelVisible("approvals") && <ApprovalsList />}
      </div>
    </div>
  );
};

export default Requests;
