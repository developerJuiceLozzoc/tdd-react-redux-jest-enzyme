import React from "react"
import PropTypes from "prop-types"


function GuessedWords(props){
  const {guessedWords} = props
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 && (
        <span data-test="guess-instructions">
        Try to guess the secret Word!
        </span>
      )}
      {guessedWords.length > 0 && (
        <div data-test="guessed-words">
          <h3> Guessed Words </h3>
          <table className="table table-sm">
            <thead className="thead-light">
            <tr><th>Guess</th><th>Matching Letters</th></tr>
            </thead>
            <tbody>
            {guessedWords.map(function(word,index){
              return (
                <tr data-test="guessed-word" key={`word-guessed-${index}`}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      )}
    </div>
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
