/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import Highlight, { defaultProps } from "prism-react-renderer"
import { BREAKPOINTS } from "../../templates/theme"
import "prism-themes/themes/prism-duotone-sea.css"
import theme from "prism-react-renderer/themes/oceanicNext"

// https://github.com/kentcdodds/kentcdodds.com/blob/master/src/components/mdx/code.js
const RE = /{([\d,-]+)}/

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

const wrapperStyles = css`
  overflow: auto;
  margin-left: -1rem;
  margin-right: -1rem;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin-left: -80px;
    margin-right: -80px;
  }
`

const preStyles = css`
  float: left;
  min-width: 100%;
  overflow: initial;
`

const CodeBlock = ({ codeString, language, metastring }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div css={wrapperStyles} data-language={language}>
          <pre className={className} style={style} css={preStyles}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? "highlight-line" : "",
                })}
              >
                <span
                  css={css`
                    display: inline-block;
                    width: 2em;
                    user-select: none;
                    opacity: 0.3;
                  `}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default CodeBlock
