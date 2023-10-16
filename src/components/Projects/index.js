import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin-top: 22px 0;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  ${({ active, theme }) =>
    active &&
    `
      background-color: ${theme.primary + 20}; 
      &:hover {background-color: ${theme.primary + 8};}
      @media screen and (max-width: 768px) { padding: 6px 8px; border-radius: 4px;}
    `}
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

export default function Projects() {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>Here are some of my projects</Description>

        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all">
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all">ALL</ToggleButton>
          )}

          <Divider />
          <ToggleButton>GROUP</ToggleButton>
          <Divider />
          <ToggleButton>PERSONAL</ToggleButton>
        </ToggleGroup>
      </Wrapper>
    </Container>
  );
}
