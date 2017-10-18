import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const style = {
	app: {
		paddingTop: 40,
		textAlign: 'center'
	}
}

class App extends Component {
	render() {
		return (
			<div styles={style.app}>
				Welcome To My Study
			</div>
			)
	}
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)