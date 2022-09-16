import styled from "styled-components";
import Background from '../../../assets/images/background.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url("/images/background.jpg");
  color: white;
  padding: 5rem;
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-top: 3rem;
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 0px;
  
`

export const SubTitle = styled.h2`
text-transform: uppercase;
  margin-top: 0px;
  font-weight: 300;
  
`

export const WhoAmI = styled.div`
  display: flex;
`

export const Descrition = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  max-width: 50%;
  
`