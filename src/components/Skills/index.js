import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Description = styled.div`
  font-size: 20px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export default function Skills() {
  return (
    <Container id={"skills"}>
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills on which I have been working on for the
          past year.
        </Description>
        {/* <SkillsContainer>
          {skills.map((item) => {
            return (
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill) => {
                    return (
                      <SkillItem>
                        <SkillImage src={skill.icon} />
                        {skill.name}
                      </SkillItem>
                    );
                  })}
                </SkillList>
              </Skill>
            );
          })}
        </SkillsContainer> */}
      </Wrapper>
    </Container>
  );
}
