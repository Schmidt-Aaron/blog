/** @jsx jsx */
import styled from "@emotion/styled"

const TitleWithGradient = styled("h1")`
  background: linear-gradient(270deg, #11998e 0%, #38ef7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 5rem;
`

export const HorizontalGradientBar = styled("div")`
  background: linear-gradient(270deg, #11998e 0%, #38ef7d 100%);
  width: 100%;
  height: 5px;
`

export default TitleWithGradient
