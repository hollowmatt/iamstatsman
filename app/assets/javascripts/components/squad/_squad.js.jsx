class Squad extends React.Component {
	render() {
		var team = this.props.team
		var idx = this.props.idx
		return(
			<tr key={idx}>
				<td>
					{team.name} 
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
				<td>
					<a className="btn-flat btn-xs"
           onClick={this.handleDelete} >
          	<i class="material-icons red419">delete</i>
        	</a>
        	<a className="btn-flat btn-xs"
           onClick={this.handleEdit} >
          	<i class="material-icons orange600">edit</i>
        	</a>
				</td>
			</tr>
		);
	}
}