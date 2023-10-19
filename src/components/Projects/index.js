import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Description,
  ToggleButton,
  ToggleGroup,
  Divider,
  CardContainer,
} from "./ProjectStyle";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

export default function Projects({ openModal, setOpenModal }) {
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
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          )}

          <Divider />
          {toggle === "group" ? (
            <ToggleButton active value="group">
              GROUP
            </ToggleButton>
          ) : (
            <ToggleButton value="group" onClick={() => setToggle("group")}>
              GROUP
            </ToggleButton>
          )}
          <Divider />
          {toggle === "personal" ? (
            <ToggleButton active value="personal">
              PERSONAL
            </ToggleButton>
          ) : (
            <ToggleButton
              value="personal"
              onClick={() => setToggle("personal")}
            >
              PERSONAL
            </ToggleButton>
          )}
        </ToggleGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}
