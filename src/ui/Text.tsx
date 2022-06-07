import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { THEME } from "./theme";

interface Props {
  shifted?: boolean;
  light?: boolean;
  bold?: boolean;
  normal?: boolean;
  italic?: boolean;
  primary?: boolean;
  grayedOut?: boolean;
  hasBg?: boolean;
}

enum Weight {
  LIGHT = "lighter",
  BOLD = "bold",
  NORMAL = "normal",
}

const getStyle = ({ italic }: Props): string => (italic ? "italic" : "normal");

const getColor = ({ primary }: Props): string =>
  primary ? THEME.primary : THEME.secondary;

const getWeight = (
  { light, bold, normal }: Props,
  defaultWeight: Weight
): Weight => {
  if (light) {
    return Weight.LIGHT;
  }

  if (bold) {
    return Weight.BOLD;
  }

  if (normal) {
    return Weight.NORMAL;
  }

  return defaultWeight;
};

const style = css`
  margin: 0;
  color: ${getColor};
  font-style: ${getStyle};
  opacity: ${({ grayedOut }: Props) => (grayedOut ? 0.7 : 1)};

  ${({ hasBg }: Props) =>
    hasBg &&
    css`
      position: relative;
      padding-left: 18px;

      &::after {
        content: "";
        top: -8px;
        bottom: 0;
        left: 0;
        height: calc(100% + 16px);
        width: 10%;
        opacity: 0.2;
        background: ${THEME.secondary};
        position: absolute;
      }
    `};

  ${({ shifted }: Props) =>
    shifted &&
    css`
      display: flex;
      align-items: center;

      &::before {
        content: "";
        display: block;
        background: ${THEME.secondary};
        opacity: 0.7;
        width: 24px;
        height: 2px;
        margin-right: 18px;
      }
    `};
`;

const XXL = styled.h1<Props>`
  font-size: 32px;
  font-weight: ${(props: Props) => getWeight(props, Weight.BOLD)};
  ${style}
`;

const XL = styled.h2<Props>`
  font-size: 26px;
  line-height: 32px;
  font-weight: ${(props: Props) => getWeight(props, Weight.BOLD)};
  ${style}
`;

const X = styled.h3<Props>`
  font-size: 18px;
  font-weight: ${(props: Props) => getWeight(props, Weight.BOLD)};
  ${style}
`;

const M = styled.p<Props>`
  font-size: 16px;
  line-height: 28px;
  margin: 0;
  font-weight: ${(props: Props) => getWeight(props, Weight.NORMAL)};
  ${style}
`;

const S = styled.p<Props>`
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  font-weight: ${(props: Props) => getWeight(props, Weight.NORMAL)};
  ${style}
`;

const Hint = styled.p<Props>`
  font-size: 16px;
  line-height: 28px;
  font-weight: ${(props: Props) => getWeight(props, Weight.LIGHT)};
  ${style}
  font-style: italic;
`;

const AComponent = styled.a`
  font-size: 16px;
  font-weight: ${(props: Props) => getWeight(props, Weight.NORMAL)};
  ${style}
  color: ${THEME.primary};
`;

const A = ({
  href,
  outside,
  children,
}: {
  href: string;
  outside?: boolean;
  children: ReactNode;
}) => {
  return (
    <AComponent href={href} target={outside ? "_blank" : ""}>
      {children}
    </AComponent>
  );
};

const B = styled.b<Props>`
  font-size: 16px;
  font-weight: ${(props: Props) => getWeight(props, Weight.BOLD)};
  ${style}
  color: ${THEME.primary};
`;

export { A, B, XXL, XL, X, M, S, Hint };
