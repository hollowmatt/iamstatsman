class Squad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [],
			team: {
	      name:'',
	      sdm:'',
	      techlead:'',
	      tpm:'',
	      pm:'',
	      sm:''
    	}
		};
	}

	componentDidMount() { 
    $.getJSON('/api/v1/teams.json', (response) => { this.setState({ teams: response }) }); 
  }

  handleClick(i) {
  	const history = this.state.teams;
  	this.setState({
  		teams: history.concat(i)
  	});
  }
	render() {
		return(
			<div>
				<NewSquad 
					team={this.state.team}
					onClick={(i) => this.handleClick(i)} />
				<AllSquads teams={this.state.teams} />
			</div>
		);
	}
}