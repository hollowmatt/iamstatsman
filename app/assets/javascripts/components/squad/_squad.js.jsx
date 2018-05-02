class Squad extends React.Component {
	render() {
		var team = this.props.team
		var idx = this.props.idx
		return(
			<div className="row">
				<div key={idx}>
					<div className="col s2 cell">
						{team.name} 
						<a className="btn btn-xs"
             onClick={this.handleDelete} >
            	Delete
          	</a>
					</div>
					<div className="col s2 cell">
						{team.sdm}
					</div>
					<div className="col s2 cell">
						{ team.techlead}
					</div>
	  			<div className="col s2 cell">
	  				{team.tpm}
					</div>
	  			<div className="col s2 cell">
	  				{team.pm}
					</div>
	  			<div className="col s2 cell">
	  				{team.sm}
					</div>
				</div>
			</div>
		);
	}
}