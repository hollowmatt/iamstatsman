class AllSquads extends React.Component {
	render() {
		var teams = this.props.teams.map((team, index) => {
			return(
				<div key={index}>
					<h3>{team.name}</h3>
				</div>
			);
		});

		return (
			<div>
				{teams}
			</div>
		);
	}
}