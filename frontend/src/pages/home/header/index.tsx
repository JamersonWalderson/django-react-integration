import Contact from "../../../components/Contact";
import { Apresentation, Container, Descrition, Icons, SubTitle, Title, WhoAmI } from "./styles";

const Header = () => {
  return (
      <Container>
        <Apresentation>
          <Title>Jamerson Walderson</Title>
          <SubTitle>Desenvolvedor web/mobile</SubTitle>
        </Apresentation>

        <WhoAmI>
          <Descrition>
            Meu nome é Jamerson e sou estudante na faculdade Estácio de Sá do curso de Sistemas de informações, Sou um apaixonado por tecnologia e automação de tarefas, acredito em um mundo não tão distante onde a programação será matéria obrigatória na grade curricular das escolas, e que a educação a distância será vista como a principal opção entre as demais.
          </Descrition>
          <Icons>
            <Contact
              icon={'fab fa-github-alt'}
              link={'https://github.com/JamersonWalderson'}
            />
          </Icons>
        </WhoAmI>
      </Container>
  )
}

export default Header;