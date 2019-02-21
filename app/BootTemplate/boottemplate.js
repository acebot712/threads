import React from 'react';
import ReactDOM from 'react-dom';
import './src/css/bootstrap.min.css';
import './src/css/style.css';
import Heading from './heading.js';
import SidePane from './sidepane.js';
import SidePaneExpanded from './sidepaneexpanded.js';
import Canvas from './canvas.js';
import CheckoutBox from './checkoutbox.js';


class BootTemplate extends React.Component{
	render(){
		return (
			<div className="container-fluid">

	{/*====================Heading===================*/}
				<Heading />
	{/*---------------------------------------------*/}		
				<div className="row">
	{/*===================Side Pane==================*/}
					<div className="col-md-1">	
						<SidePane />
					</div>	
	{/*=================Side Pane Expanded===========*/}
					<div className="col-md-3">
						<SidePaneExpanded />
					</div>
	{/*========================CANVAS======================*/}
					<div className="col-md-6">
						<Canvas />
					</div>
	{/*========================Checkout Box=====================*/}
					<div className="col-md-2">
						<CheckoutBox />
					</div>
				</div>
			{/*---------------------------------*/}
			</div>
		);
	}
}

export default BootTemplate;