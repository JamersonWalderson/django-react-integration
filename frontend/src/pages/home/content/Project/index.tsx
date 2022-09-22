import { memo } from "react";
import { Container, About, Demostration, Description, Image, LinkImage, Name } from "./styles";

const Project = () => {
    return(
        <Container>
          <Description>
            <Name>
              VITRINE VIRTUAL
            </Name>
            <About>
              Este trabalho foi meu TCC em Sistemas de informações. Vitrine virtual é um sistema de exposição de produtos, o sistema foi inteiramente desenvolvido utilizando o framework laravel em sua versão mais recente, e possui um painel administrativo com dois níveis de acesso para melhor administração do negócio. No repositório também é possivel encontrar um PDF com toda documentação do desenvolvimento.
            </About>
          </Description>
          <Image>
            <LinkImage 
              href="https://github.com/JamersonWalderson/TCC-vitrine-virtual"
              target="_blank"
            >
              <Demostration 
                src="https://github.com/JamersonWalderson/vitrine-virtual/raw/main/demo-vitrine2.gif"
                className="img-fluid"
              />
            </LinkImage>
          </Image>
        </Container>
    )
}

export default memo(Project);