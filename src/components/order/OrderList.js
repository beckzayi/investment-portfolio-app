import React from 'react';
import { connect } from 'react-redux';
import OrderItem from './OrderItem';

class OrderList extends React.Component {
	renderContent() {
		const { orders } = this.props;

		if (orders.length < 1) {
			return(
				<div className="py-2">No transaction yet. Please buy or sell your shares.</div>
			);
		}

		return(
			<div className="py-2">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Instrument</th>
							<th scope="col">Symbol</th>
							<th scope="col">Rate</th>
							<th scope="col">Type</th>
							<th scope="col">Shares</th>
							<th scope="col">Amount</th>
							<th scope="col">Created at</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => <OrderItem order={order} key={order.id} />)}
					</tbody>
				</table>
			</div>
		);
	}

	renderBreadcrumb() {
		return(
			<nav aria-label="breadcrumb">
			  <ol className="breadcrumb mb-0 bg-transparent">
			    <li className="breadcrumb-item active" aria-current="page">Home</li>
			  </ol>
			</nav>
		);
	}

	render() {
		console.log(this.props.orders);
		return(
			<div>
				<h1>OrderList</h1>
				{this.renderBreadcrumb()}
				{this.renderContent()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		orders: state.orders
	}
}

export default connect(mapStateToProps)(OrderList);