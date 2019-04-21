import React from 'react'
import Link from 'next/link'

class Index extends React.Component {
  
  render () {
    return (
      <div>
        <h1>heroic rocks</h1>
        <Link href="/about">
          <a>Why does it rock?</a>
        </Link>
      </div>
    )
  }
  
}

export default Index
