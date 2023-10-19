import {
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  Image,
} from "./HeroStyle";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/portfolio-img-crop.jpg";
import HeroBgAnimation from "./HeroBgAnimation";

export default function Hero() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, my name is <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Check out my Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={HeroImg} alt="Hero" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}
