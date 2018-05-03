class Squad extends React.Component {
	render() {
		var team = this.props.team
		var idx = this.props.idx
		return(
			<tr key={idx}>
				<td>
					{team.name} 
					<a className="btn btn-xs"
           onClick={this.handleDelete} >
          	Delete
        	</a>
				</td>
				<td>
					{team.sdm}
				</td>
				<td>
					{ team.techlead}
				</td>
  			<td>
  				{team.tpm}
				</td>
  			<td>
  				{team.pm}
				</td>
  			<td>
  				{team.sm}
				</td>
			</tr>
		);
	}
}