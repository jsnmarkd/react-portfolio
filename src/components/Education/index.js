import {
  Container,
  Wrapper,
  Title,
  Description,
  TimeLineSection,
} from "./EducationStyle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

export default function Education() {
  return (
    <Container id={"education"}>
      <Wrapper>
        <Title>Education</Title>
        <Description>My education details are as follows</Description>
        <TimeLineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={education.id}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="grey" />
                  {index !== education.length && (
                    <TimelineConnector style={{ background: "#FFD935" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
}
