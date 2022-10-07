import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { VictoryPie } from "victory-pie";

const DashboardGraphs = () => {
  const [level, setLevel] = useState(25);
  const [completeLevel, setCompleteLevel] = useState(0);
  const [statusLevel, setStatusLevel] = useState(50);

  const circleLabelStyle = { textAlign: "center", height: "20%" };

  const statusData = [
    { x: "Issued", y: "30%" },
    { x: "Re-issued", y: "30%" },
    { x: "In Progress", y: "40%" }
  ];

  const assigneeData = [
    { x: "Issued", y: "20%" },
    { x: "Re-issued", y: "40%" },
    { x: "In Progress", y: "40%" }
  ];

  const completedData = [
    { x: "Issued", y: "45%" },
    { x: "Re-issued", y: "30%" },
    { x: "In Progress", y: "25%" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
      setCompleteLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
      setStatusLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
    }, 500);

    return () => {
      clearInterval(timer);
    };
  });

  const pieStyle = {
    labels: {
      fontSize: "10",
      color: "#545A63",
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontStyle: "normal"
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <div
        style={{
          marginLeft: "5%",
          width: "30%",
          height: "100%"
        }}
      >
        <div className="box" style={{ height: "100%" }}>
          <div
            style={{
              height: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {/* <CircularProgress
                    size={"25%"}
                    style={{ marginTop: "10%", color: "orange" }}
                    color="secondary"
                    variant="determinate"
                    value={statusLevel}
                  ></CircularProgress> */}
              <VictoryPie
                data={statusData}
                colorScale={["#00beff", "#00e6c1", "#00feff"]}
                height={250}
                style={pieStyle}
                variant="determinate"
              ></VictoryPie>
            </Grid>
          </div>
          <div className="circle" style={circleLabelStyle}>
            Tasks by Status
          </div>
        </div>
      </div>
      <div style={{ width: "30%", height: "100%" }}>
        <div className="box" style={{ height: "100%" }}>
          <div
            style={{
              height: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {/* <CircularProgress
                    size={"25%"}
                    style={{ marginTop: "10%" }}
                    color="secondary"
                    variant="determinate"
                    value={level}
                  ></CircularProgress> */}
              <VictoryPie
                data={assigneeData}
                colorScale={["#00cc88", "#bfff00", "#00ff00"]}
                height={250}
                style={pieStyle}
                variant="determinate"
              ></VictoryPie>
            </Grid>
          </div>
          <div className="label" style={circleLabelStyle}>
            Tasks by Assignee
          </div>
        </div>
      </div>
      <div
        style={{
          marginRight: "5%",
          width: "30%",
          height: "100%"
        }}
      >
        <div className="box" style={{ height: "100%" }}>
          <div
            style={{
              height: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {/* <CircularProgress
                    size={"25%"}
                    style={{ marginTop: "10%", color: "green" }}
                    color="secondary"
                    variant="determinate"
                    value={completeLevel}
                  ></CircularProgress> */}
              <VictoryPie
                data={completedData}
                colorScale={["#8484e6", "#4e4eff", "#0000b0"]}
                height={250}
                style={pieStyle}
                variant="determinate"
              ></VictoryPie>
            </Grid>
          </div>
          <div className="label" style={circleLabelStyle}>
            % Complete
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraphs;
