import React from "react";
import { useEffect, useState } from "react";
import { Row, Col, Table } from "reactstrap";
import "./OutBoard.css";

export const OutputBoard = (props) => {
  const { projectboard } = props;

  return (
    <div className="mt-4">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Table hover>
            <thead>
              <tr>
                <th>Project</th>
                <th>Start</th>
                <th>Stop</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <RenderTableData projectboard={projectboard} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
const RenderTableData = (props) => {
  const { projectboard } = props;
  var count = 0;
  const finalArray = projectboard;
  return Object.keys(finalArray).map((i) => {
    const { projectname, cdate, cdateStop, time } = finalArray[i];
    count = count + 1;
    return (
      <tr key={count.toString(10)}>
        <td>{projectname}</td>
        <td>{cdate}</td>
        <td>{cdateStop}</td>
        <td>
          <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </td>
      </tr>
    );
  });
};
