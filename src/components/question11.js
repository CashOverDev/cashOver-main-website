import React from 'react'

import PropTypes from 'prop-types'

import './question11.css'

const Question11 = (props) => {
  return (
    <div className="question11-container">
      <span className="question11-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question11.defaultProps = {
  question: 'What types of cars do you sell?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

Question11.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default Question11
