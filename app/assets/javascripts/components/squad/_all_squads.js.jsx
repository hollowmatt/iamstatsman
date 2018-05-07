class AllSquads extends React.Component {
	render() {
		var teams = this.props.teams.map((team, index) => {
			return(
				<Squad team={team} idx={index} />	
			);
		});

		return (
			<div className="row">
				<table>
					<thead>
						<SquadTableHeader />
					</thead>
					<tbody>
						{teams}
					</tbody>
				</table>
			</div>
		);
	}
}