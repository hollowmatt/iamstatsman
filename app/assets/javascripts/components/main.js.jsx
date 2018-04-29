class Main extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { teams: [] };
  } 

  componentDidMount() { 
    $.getJSON('/api/v1/teams.json', (response) => { this.setState({ teams: response }) }); 
  }

  handleSubmit(item) {
    var newState = this.state.teams;
    newState.push(item);
    this.setState({ teams: newState });
  }

  render() {
    return (
      <div>
        <Header />
        <AllTeams teams={this.state.teams} />
        <NewTeam handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

