import styled from "styled-components";

export const Button = styled.button`
border: none;
margin: 76px 0 51px 0;
width: 342px;
height: 68px;
background: ${(props) =>
        props.theme === 'primary' ? '#D93856' : '#FFFFFF24'};
color: #fff;
font-size: 17px;
font-weight: 900;
cursor: pointer;

&:hover {opacity: 0.8

}
&:active{

opacity: 0.5;
}


`
