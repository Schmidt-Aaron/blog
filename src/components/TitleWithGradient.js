/** @jsx jsx */
import styled from "@emotion/styled"
import { COLORS, BREAKPOINTS } from "../templates/theme"

const TitleWithGradient = styled("h1")`
  background: linear-gradient(
    270deg,
    ${COLORS.gradientDark} 0%,
    ${COLORS.gradientLight} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 5rem;
  display: inline-block;
`

export const HorizontalGradientBar = styled("div")`
  background: linear-gradient(
    270deg,
    ${COLORS.gradientDark} 0%,
    ${COLORS.gradientLight} 100%
  );
  width: 100%;
  height: 5px;
`

export default TitleWithGradient
