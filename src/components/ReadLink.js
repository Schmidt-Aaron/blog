/**
 *
 * styled Link component used in post preview
 *
 */
/** @jsx jsx */
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { COLORS } from "../templates/theme"

const ReadLink = styled(Link)`
  display: inline-block;
  font-size: 0.85rem;
  color: ${COLORS.darkBlue};
`

export default ReadLink
