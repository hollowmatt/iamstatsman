class Main extends React.Component {
  constructor(props) { 
    super(props);
		this.state = { teams: [] }
  } 

  componentDidMount() { 
  	$.getJSON('/api/v1/teams.json', (response) => { this.setState({ teams: response }) }); 
  }

  render() {
    return (
      <div>
        <Header />
        <AllTeams teams={this.state.teams} />
        <NewTeam />
      </div>
    );
  }
}

