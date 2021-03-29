import React from "react"
import PropTypes from "prop-types"

function Congrats({success}){
  if(!success){
    return <div data-test="component-congrats" />
  }
  return (
    <div data-test="component-congrats">
      <span data-test="congrats-message">
      Congratz
      </span>
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats
