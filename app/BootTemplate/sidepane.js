import React from 'react';
import ReactDOM from 'react-dom';

class SidePane extends React.Component{
	render(){
		return(
			<ul className="nav flex-column">
				<li className="nav-item">
					<a className="nav-link">Templates</a>
				</li>
				<li className="nav-item">
					<a className="nav-link">Layout</a>
				</li>
				<li className="nav-item">
					<a className="nav-link">Elements</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled">Text</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled">Background</a>
				</li>							
			</ul>
		);
	}
}

export default SidePane;