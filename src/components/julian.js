import React from 'react'

import PropTypes from 'prop-types'

import './julian.css'

const Julian = (props) => {
  return (
    <div className="julian-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Julian.defaultProps = {
  text: 'Text',
}

Julian.propTypes = {
  text: PropTypes.string,
}

export default Julian
