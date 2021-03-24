import styled from 'styled-components';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: ${(props) => props.color};
  text-shadow: 1px 1px 2px gray;
  font-size: 32px;
`;

export default Label;
