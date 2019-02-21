import React from 'react';
import ReactDOM from 'react-dom';
import BootTemplate from './BootTemplate/boottemplate'

class App extends React.Component{
	render(){
		return(
			<BootTemplate />
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);