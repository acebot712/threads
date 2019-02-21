import React from 'react';
import ReactDOM from 'react-dom';

class CheckoutBox extends React.Component{
	render(){
		return(
			<React.Fragment>
				<table className="table table-sm">
					<thead>
						<tr>
							<th>
								Size
							</th>
							<th>
								Quantity
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								S
							</td>
							<td>
								0
							</td>
						</tr>
						<tr className="table">
							<td>
								M
							</td>
							<td>
								0
							</td>
						</tr>
						<tr className="table">
							<td>
								L
							</td>
							<td>
								0
							</td>
						</tr>
						<tr className="table">
							<td>
								XL
							</td>
							<td>
								0
							</td>
						</tr>
					</tbody>
				</table>
				<div className="row">
					<div className="col-md-6">
						Per Piece Price
					</div>
					<div className="col-md-6">
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						Total Price
					</div>
					<div className="col-md-6">
					</div>
				</div>
				<button type="button" className="btn btn-success">
					Checkout
				</button>
			</React.Fragment>
		);
	}
}

export default CheckoutBox;