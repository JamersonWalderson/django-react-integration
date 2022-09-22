import styled from "styled-components";
import { device } from "../../../../utils/device";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem!important;
  margin-bottom: 3rem!important;
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const Description = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 50%;
  }
`

export const Image = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 50%;
  }
`

export const Name = styled.h4`
  font-size: calc(1.275rem + .3vw);
`

export const About = styled.p``

export const LinkImage = styled.a``

export const Demostration = styled.img`
  width: 100%;
  height: 13em;
`