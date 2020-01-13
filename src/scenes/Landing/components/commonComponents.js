import styled from "styled-components/macro"

export const Container = styled.div`
  margin: 5px 15px;
  width: calc(100% - 30px);
  min-width: 250px;
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
  max-width: 100%;
  width: 100%;
`

export const Subtitle = styled.p`
  margin: 3px 0;
  color: gray;
  font-size: 12px;
  text-align: center;
`

export const Title = styled.h3`
  margin-bottom: 2px;
  text-align: left;
  width: 100%;
`
