import React from "react";

interface Prop {
  name?: string;
}
const HelloWorld: React.FC<Prop> = ({ name = "World" }) => {
  return <div>Hello {name}!</div>;
};

export default HelloWorld;
