import styled from "styled-components";

import { THEME } from "./theme";

export const Button = styled.button`
  text-transform: uppercase;
  background: none;
  color: ${THEME.primary};
  font-size: 14px;
  font-weight: bolder;
  padding: 12px 18px;
  box-sizing: border-box;
  min-width: 72px;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  border: 1px solid ${THEME.primary};

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${THEME.primary};
    color: ${THEME.bg};
  }
`;
