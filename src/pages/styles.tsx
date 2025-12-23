import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  margin: 20px;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "header"
    "content";
  justify-content: center;
  align-items: start;
  height: 100vh;
`;

export const HeaderArea = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContentArea = styled.div`
  grid-area: content;
`;
