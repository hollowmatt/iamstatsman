class AllTeams extends React.Component{
	constructor(props) { 
    super(props);
		this.state = { teams: [] }
  } 

  componentDidMount() { 
  	$.getJSON('/api/v1/teams.json', (response) => { this.setState({ teams: response }) }); 
  }

  render() {
    var teams = this.state.teams.map((team, index) => {
    	return (
    		<div key={index}>
    			<h3>{team.name}</h3>
    			<ul>
    				<li><strong>SDM</strong>{team.sdm}</li>
    				<li><strong>Tech Lead</strong>{team.techlead}</li>
    				<li><strong>TPM</strong>{team.tpm}</li>
    				<li><strong>Product Manager</strong>{team.pm}</li>
    				<li><strong>Scrum Master</strong>{team.sm}</li>
    			</ul>
    		</div>
    	)
    });

    return (
      <div>
        {teams}
      </div>
    );
  }
}