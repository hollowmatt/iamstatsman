class Squad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: []
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
				<AllSquads teams={this.state.teams} />
			</div>
		);
	}
}