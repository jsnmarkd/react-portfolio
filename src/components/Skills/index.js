import styled from "styled-components";
import { skills } from "../../data/constants";

export default function Skills() {
  return (
    <Container id={"skills"}>
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills on which I have been working on for the
          past year.
        </Description>
        <SkillsContainer>
          {skills.map((item) => {
            return (
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill) => {
                    return (
                      <SkillItem>
                        <SkillImage src={skill.icon} />
                        <SkillName>{skill.name}</SkillName>
                      </SkillItem>
                    );
                  })}
                </SkillList>
              </Skill>
            );
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}
