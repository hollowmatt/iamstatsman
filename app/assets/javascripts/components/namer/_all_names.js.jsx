class AllNames extends React.Component {

	render() {
		var peeps = this.props.peeps.map((peep, index) => {
			return(
				<OneName peep={peep} idx={index} />
			);
		});

		return(
			<div className="row">
				<table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
						</tr>
					</thead>
					<tbody>
						{peeps}
					</tbody>
				</table>
			</div>
		);
	}
}