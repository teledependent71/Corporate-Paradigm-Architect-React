import React from 'react'

import PropTypes from 'prop-types'

import './test-component.css'

const TestComponent = (props) => {
  return (
    <div className="test-component-container">
      {props.children}
      <h1 className="test-component-text">{props.heading}</h1>
    </div>
  )
}

TestComponent.defaultProps = {
  heading: 'Heading',
}

TestComponent.propTypes = {
  heading: PropTypes.string,
}

export default TestComponent
