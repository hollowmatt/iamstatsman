class AllSquads extends React.Component {
	render() {
		var teams = this.props.teams.map((team, index) => {
			return(
				<Squad team={team} idx={index} />	
			);
		});

		return (
			<div>
				<div className="row">
					<div className="col s2">
						<strong>
							Team Name
						</strong>
					</div>
					<div className="col s2">
						<strong>
							SDM
						</strong>
					</div>
					<div className="col s2">
						<strong>
							Tech Lead
						</strong>
					</div>
					<div className="col s2">
						<strong>
							TPM
						</strong>
					</div>
					<div className="col s2">
						<strong>
							Product
						</strong>
					</div>
					<div className="col s2">
						<strong>
							Scrum Master
						</strong>
					</div>
				</div>
				{teams}
			</div>
		);
	}
}