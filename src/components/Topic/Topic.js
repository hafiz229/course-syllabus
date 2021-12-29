import React from "react";

const Topic = (props) => {
  return props.week === undefined ? (
    props.viewMore === false ? (
      <td className="right-border bottom-border">
        <ul style={{ fontWeight: "normal" }}>
          <li className="topic-design topic-padding">Why Learn AWS</li>
          <li className="topic-padding">Inception of AWS</li>
          <li className="topic-padding">AWS high level overview</li>
          <li>Create AWS Account</li>
        </ul>
      </td>
    ) : (
      <td className="right-border">
        <ul style={{ fontWeight: "normal" }}>
          <li className="topic-design">Why Learn AWS</li>
          <li>Inception of AWS</li>
          <li>AWS high level overview</li>
          <li>Create AWS Account</li>
        </ul>
      </td>
    )
  ) : (
    <td className="right-border bottom-border">
      <ul style={{ fontWeight: "normal" }}>
        <li className="topic-design topic-padding">Why Learn AWS</li>
        <li className="topic-padding">Inception of AWS</li>
        <li className="topic-padding">AWS high level overview</li>
        <li>Create AWS Account</li>
      </ul>
    </td>
  );
};

export default Topic;
