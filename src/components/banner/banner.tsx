import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  sentence: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: #01ffff;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8px 20px;
`;
const Banner = () => {
  return <Container sentence="">''</Container>;
};

export default Banner;
