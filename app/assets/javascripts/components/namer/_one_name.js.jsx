class OneName extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var peep = this.props.peep;
		return(
			<tr key={this.props.idx}>
				<td>
					{peep.first_name}
				</td>
				<td>
					{peep.last_name}
				</td>
			</tr>
		);
	}
	
}