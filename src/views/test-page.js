import React from 'react'

import { Helmet } from 'react-helmet'

import './test-page.css'

const TestPage = (props) => {
  return (
    <div className="test-page-container">
      <Helmet>
        <title>test-page - Corporate Paradigm Architect</title>
        <meta
          property="og:title"
          content="test-page - Corporate Paradigm Architect"
        />
      </Helmet>
    </div>
  )
}

export default TestPage
