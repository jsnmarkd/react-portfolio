import {
  Container,
  Wrapper,
  TimeLineSection,
  Description,
  Title,
} from "./ExperienceStyle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";

export default function Experience() {
  return (
    <Container id={"experience"}>
      <Wrapper>
        <Title>Experience</Title>
        <Description>My Work Experience</Description>
        <TimeLineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="grey" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: "#FFD935" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
}
