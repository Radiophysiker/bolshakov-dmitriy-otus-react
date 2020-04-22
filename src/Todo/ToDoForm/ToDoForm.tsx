import React, { Component } from "react";
import styled from "@emotion/styled";

interface StateInterface {
  label: string;
}

const Form = styled.form`
  margin-top: 16px;
  display: flex;
`;
const Button = styled.button`
  color: white;
  background-color: #138496;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  height: 44px;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-right: 16px;
  box-sizing: border-box;
`;

interface PropsInterface {
  onClickToDoAdd: (label: string) => void;
}

export class ToDoForm extends Component<PropsInterface, StateInterface> {
  state: StateInterface = {
    label: "",
  };

  onLabelChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      label: event.currentTarget.value,
    });
  };
  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { label } = this.state;
    this.setState({ label: "" });
    this.props.onClickToDoAdd(label);
  };

  public render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          type="text"
          onChange={this.onLabelChange}
          value={this.state.label}
          placeholder="What needs to be done?"
        />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}
