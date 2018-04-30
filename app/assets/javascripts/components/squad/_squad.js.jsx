class Squad extends React.Component {
	render() {
		var team = this.props.team
		var idx = this.props.idx
		return(
			<div className="row">
				<div key={idx}>
					<div className="col s2">
						{team.name}
					</div>
					<div className="col s2">
						{team.sdm}
					</div>
					<div className="col s2">
						{ team.techlead}
					</div>
	  			<div className="col s2">
	  				{team.tpm}
					</div>
	  			<div className="col s2">
	  				{team.pm}
					</div>
	  			<div className="col s2">
	  				{team.sm}
					</div>
				</div>
			</div>
		);
	}
}