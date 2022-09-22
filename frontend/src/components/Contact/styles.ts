import styled from "styled-components";

export const Icon = styled.i.attrs(props => ({
    className: props.className,
}))`
    font-size: 35px;
    border-radius: 50%;
    border: 3px solid rgb(255, 255, 255);
    transition: all .7s;
    margin: 5px;
    padding: 10px;
    color: white;
`;