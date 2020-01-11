import styled from "styled-components/macro"

export const Container = styled.div`
  margin: 5px 15px;
  width: calc(50% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div > div > input {
    border: 1px solid black;
    box-sizing: border-box;
    padding: 5px 10px;
  }
`

export const Input = styled.input`
  border: 1px solid black;
  box-sizing: border-box;
  padding: 5px 10px;
`
