import React from "react";
import WeekDay from "../WeekDay/WeekDay";
import "./Syllabus.css";

const Syllabus = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <table style={{ textAlign: "left" }} cellSpacing={0}>
          <caption style={{ textAlign: "left" }}>
            <h1 colSpan={3} style={{ color: "white" }}>
              The Course Syllabus
            </h1>
          </caption>
          <thead>
            <tr>
              <th className="left-border" style={{ width: "10%" }}>
                Week
              </th>
              <th>Day</th>
              <th style={{ width: "70%" }} className="right-border">
                Topic
              </th>
            </tr>
          </thead>
          <WeekDay />
          <WeekDay />
          <WeekDay />
        </table>
      </div>
    </div>
  );
};

export default Syllabus;
