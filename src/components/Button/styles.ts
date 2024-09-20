import styled from "@emotion/styled";

interface ButtonCompenentProps{
  disabled: boolean
}

export const ButtonCompenent = styled.button`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({disabled})=> disabled?"grey":"#1f27f5"};
  color: white;
  font-size: 16px;
  cursor: pointer;
`
