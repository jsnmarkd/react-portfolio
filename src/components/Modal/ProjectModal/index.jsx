import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import {
  Container,
  Wrapper,
  Image,
  Title,
  Date,
  Tag,
  Tags,
  Desc,
  Label,
  Member,
  Members,
  MemberImage,
  MemberName,
  Button,
  ButtonGroup,
} from "./ProjectModalStyle";

export default function index({ openModal, setOpenModal }) {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member) => (
                  <Member>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    {member.github ? (
                      <a
                        href={member.github}
                        target="new"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <GitHub />
                      </a>
                    ) : null}
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="new"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <LinkedIn />
                      </a>
                    ) : null}
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            {project.webapp ? (
              <Button href={project?.webapp} target="new">
                View Live App
              </Button>
            ) : null}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
}
