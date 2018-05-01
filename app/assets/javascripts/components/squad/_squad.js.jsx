class Squad extends React.Component {
	render() {
		var team = this.props.team
		var idx = this.props.idx
		return(
			<div className="row">
				<div key={idx}>
					<div className="col s2 cell">
						{team.name}
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