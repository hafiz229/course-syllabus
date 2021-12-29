import React from "react";
import Topic from "../Topic/Topic";

const WeekDay = (props) => {
  return props.week === "1" ? (
    <tbody>
      <tr>
        {props.viewMore === true ? (
          <td rowSpan={4} className="left-border">
            {props.week}
          </td>
        ) : (
          <td rowSpan={4} className="left-border bottom-border">
            {props.week}
          </td>
        )}
        <td>Day 1</td>
        <Topic></Topic>
      </tr>
      {props.viewMore === true ? (
        <tr>
          <td>Day 2</td>
          <Topic></Topic>
        </tr>
      ) : (
        <tr>
          <td className="bottom-border">Day 2</td>
          <Topic viewMore={props.viewMore}></Topic>
        </tr>
      )}
      {props.viewMore === true && (
        <tr>
          <td>Day 3</td>
          <Topic></Topic>
        </tr>
      )}
      {props.viewMore === true && (
        <tr>
          <td>Live Session</td>
          <td className="right-border">Live Session 1</td>
        </tr>
      )}
    </tbody>
  ) : (
    props.viewMore === true && (
      <tbody>
        <tr>
          <td rowSpan={4} className="left-border">
            {props.week}
          </td>
          <td className="bottom-border">Day 1</td>
          <Topic week={props.week}></Topic>
        </tr>
        <tr>
          <td className="bottom-border">Day 2</td>
          <Topic week={props.week}></Topic>
        </tr>
        <tr>
          <td className="bottom-border">Day 3</td>
          <Topic week={props.week}></Topic>
        </tr>
        <tr>
          <td>Live Session</td>
          <td className="right-border">Live Session 1</td>
        </tr>
      </tbody>
    )
  );
};

export default WeekDay;
