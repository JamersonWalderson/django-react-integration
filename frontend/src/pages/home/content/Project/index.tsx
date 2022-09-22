import { memo } from "react";
import { Container, About, Demostration, Description, Image, LinkImage, Name } from "./styles";

const Project = () => {
    return(
        <Container>
          <Description>
            <Name>
              lorem ipsum
            </Name>
            <About>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae animi reiciendis esse molestias sint maiores debitis odio aliquam, nisi hic, similique porro. Ab, sequi veniam nobis repellendus corporis obcaecati.
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