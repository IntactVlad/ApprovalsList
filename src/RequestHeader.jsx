import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header } from "./Header";

export default function RequestHeader({ ticket }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      style={{
        margin: "1em 1em 1em 1em",
        width: "100%"
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{
          backgroundColor: "#E0E0E0",
          borderRadius: "5px 5px 0 0",
          width: "100%",
          paddingLeft: "1em"
        }}
      >
        Overview
      </AccordionSummary>
      <AccordionDetails>
        <Header ticket={ticket} />
      </AccordionDetails>
    </Accordion>
  );
}
