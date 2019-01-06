import React from 'react'

class Title extends React.Component {

	componentDidMount () {
		document.title=`Heroic - ${this.props.title}`
	}

	render () {
		return null
	}

}

export default Title