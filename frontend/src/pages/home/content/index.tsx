import Project from "./Project";
import { Container, Projects, Title } from "./styles";

const Content = () => {
  return (
    <Container>
        <div>
          <Title>PORTFÓLIO</Title>
        </div>
      <Projects>
        <Project />
      </Projects>
    </Container>
  )
}

export default Content;

