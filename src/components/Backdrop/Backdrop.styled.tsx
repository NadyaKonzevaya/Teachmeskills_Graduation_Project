import styled from "@emotion/styled";

export const Overlay = styled.div`
    width: 100vw;
  height: 100vh;
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  background-color: #26222f80;
  transition:
  opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
  visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
