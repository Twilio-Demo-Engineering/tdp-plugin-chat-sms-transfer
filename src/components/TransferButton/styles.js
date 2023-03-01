import styled from 'styled-components';

export const StyledButton = styled('button')`
  background: ${(props) => (props.background ? props.background : '#ccc')};
  color: ${(props) => (props.color ? props.color : '#000')};
  //letter-spacing: 2px;
  //text-transform: uppercase;
  font-weight: bold;
  margin-right: 1em;
  padding: 0px 7px;
  height: 26.5px;
  outline: none;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-width: initial;
  border-style: none;
  border-color: initial;
  font-size: 12.25px;
  &:hover {
    cursor: pointer;
  }
`;
