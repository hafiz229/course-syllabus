import React, { useState } from "react";
import { Link } from "react-router-dom";
import WeekDay from "../WeekDay/WeekDay";
import "./Syllabus.css";

const Syllabus = () => {
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    viewMore === false ? setViewMore(true) : setViewMore(false);
  };
  let backgroundColor, headingColor;
  if (viewMore === false) {
    backgroundColor = {
      backgroundColor: "white",
    };
    headingColor = {
      color: "black",
    };
  } else {
    backgroundColor = {
      backgroundColor: "#3A879B",
    };
    headingColor = {
      color: "white",
    };
  }
  return (
    <div style={backgroundColor}>
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <table style={{ textAlign: "left" }} cellSpacing={0}>
          <caption style={{ textAlign: "left" }}>
            <h1 colSpan={3} style={headingColor}>
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
          <WeekDay viewMore={viewMore} week="1" />
          <WeekDay viewMore={viewMore} week="2" />
          <WeekDay viewMore={viewMore} week="3" />
        </table>
        <div style={{ textAlign: "left", paddingTop: "20px" }}>
          {viewMore === false ? (
            <Link to="/" onClick={handleViewMore} className="view-design">
              + View More
            </Link>
          ) : (
            <Link
              to="/"
              onClick={handleViewMore}
              style={{ color: "white" }}
              className="view-design"
            >
              - View Less
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
