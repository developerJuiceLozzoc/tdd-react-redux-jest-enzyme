import React from "react"
import PropTypes from "prop-types"
function GuessedWords(props){
  return (
    <div />
  )
}


GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  )
}
export default GuessedWords
