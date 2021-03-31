import React from "react"
import PropTypes from "prop-types"
import {useSelector,useDispatch} from "react-redux"
import {guessWord} from "./actions"

function JottoInput({secretWord,onSubmit}){
  const [text,setText] = React.useState("")
  const success = useSelector((state)=>(state.success))
  const dispatch = useDispatch()
  if(success){
    return <div data-test="component-input" />
  }
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
          onClick={function(e){
            e.preventDefault();
            if(text.length > 0){
              dispatch(guessWord(text))
            }
            setText("")

          }}
          >
          submit
        </button>
      </form>
    </div>
  )
}

JottoInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
  // onSubmit: PropTypes.func.isRequired,
}
export default JottoInput
