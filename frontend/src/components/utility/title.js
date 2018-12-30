import React from 'react'

class Title extends React.Component {

	componentDidMount () {
		document.title=`${this.props.title} - Valor`
	}

	render () {
		return null
	}

}

export default Title