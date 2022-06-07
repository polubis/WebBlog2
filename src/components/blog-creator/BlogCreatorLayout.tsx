import React from "react";

import styled from "styled-components";

import { THEME } from "@ui";

const Layout = styled.div`
  height: 100vh;
  background: ${THEME.bg};
  display: flex;
  flex-flow: column;
  padding: 0 28px;

  & > a:not(:last-of-type) {
    margin-right: 62px;
  }
`;

interface Props {
  children: React.ReactNode;
}

export const BlogCreatorLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};
