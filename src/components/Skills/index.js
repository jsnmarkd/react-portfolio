import { skills } from "../../data/constants";
import {
  Container,
  Wrapper,
  Title,
  Description,
  SkillsContainer,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillTitle,
} from "./SkillStyle";

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
              <Skill key={item.title}>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill) => {
                    return (
                      <SkillItem key={skill.name}>
                        <SkillImage src={skill.image} />
                        {skill.name}
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
