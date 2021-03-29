import React from "react"
import PropTypes from "prop-types"

function JottoInput({secretWord}){
  const [text,setText] = React.useState("")
  return (
    <div data-test="component-input" >
      <form className="form-inline">
      <input
        data-test="input-box"
        className="mb-2 mx-sm-3"
        type="text"
        value={text}
        onChange={(event)=> setText(event.target.value)}
        placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          >
          submit
        </button>
      </form>
    </div>
  )
}

JottoInput.propTypes = {
  secretWord: PropTypes.string.isRequired
}
export default JottoInput
