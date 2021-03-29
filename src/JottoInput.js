import React from "react"
import PropTypes from "prop-types"

function JottoInput({secretWord}){
  return (
    <div data-test="component-input" />
  )
}

JottoInput.propTypes = {
  secretWord: PropTypes.string.isRequired
}
export default JottoInput
