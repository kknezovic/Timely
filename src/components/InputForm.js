import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./InputForm.css";

export const InputForm = (props) => {
  const { updateBoardArray } = props;
  const initialInputState = { projectname: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { projectname } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = (e) => {
    updateBoardArray(eachEntry);
  };

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center"></Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="projectname">Project name*</Label>
              <Input
                name="projectname"
                placeholder="Ex: Project 1"
                onChange={handleInputChange}
                value={projectname}
              />
            </FormGroup>
            <div className="d">
              <Button onClick={handleFinalSubmit}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
