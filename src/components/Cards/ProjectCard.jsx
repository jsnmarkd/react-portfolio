import styled from "styled-components";


export default function ProjectCard({ project }) {
  return (
    <Card>
      <Image src={project.image} />
      <Tags></Tags>
      <Details></Details>
      <Members></Members>
    </Card>
  );
}
