import React from 'react'
import Link from 'next/link'

class About extends React.Component {
  
  render () {
    return (
      <div>
        <h3>heroic just is cool</h3>
        <Link href="/">
          <a>Back to landing</a>
        </Link>
      </div>
    )
  }
  
}

export default About
