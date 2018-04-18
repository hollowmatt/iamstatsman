class Teams extends React.Component {
  constructor(props) { 
    super(props);
		this.state = { 
      teams: [],
      newTeam: {
        name:'',
        sdm:'',
        techlead:'',
        tpm:'',
        pm:'',
        sm:''
      } 
    }
  } 

  componentDidMount() { 
  	$.getJSON('/api/v1/teams.json', (response) => { this.setState({ teams: response }) }); 
  }

  handleSubmit(item) {
  	alert(item);
  	var newState = this.state.teams.concat(item); 
  	this.setState({ teams: newState });
  }

  render() {
    return (
      <div>
        <Header />
        <AllTeams teams={this.state.teams} />
        <NewTeam newTeam={this.state.newTeam} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

