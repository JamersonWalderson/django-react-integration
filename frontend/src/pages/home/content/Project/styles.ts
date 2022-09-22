import styled from "styled-components";
import { device } from "../../../../utils/device";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const Name = styled.h4``

export const About = styled.p``

export const LinkImage = styled.a``

export const Demostration = styled.img`
  width: 100%;
  height: 13em;
`