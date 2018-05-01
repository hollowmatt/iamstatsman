class SquadTableHeader extends React.Component {
	render() {
		return(
			<div className="row">
				<div className="col s2 table-head">
					<strong>
						Team Name
					</strong>
				</div>
				<div className="col s2 table-head">
					<strong>
						SDM
					</strong>
				</div>
				<div className="col s2 table-head">
					<strong>
						Tech Lead
					</strong>
				</div>
				<div className="col s2 table-head">
					<strong>
						TPM
					</strong>
				</div>
				<div className="col s2 table-head">
					<strong>
						Product
					</strong>
				</div>
				<div className="col s2 table-head">
					<strong>
						Scrum Master
					</strong>
				</div>
			</div>
		);
	}
}