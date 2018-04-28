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
    this.getDataFromApi();
  }

  getDataFromApi() {
  	var self = this;
  	$.ajax({
  		url: '/api/v1/teams.json',
  		success: function(data) {
  			self.setState({ teams: data });
  		},
  		error: function(xhr, status, error) {
  			alert('Cannot get data from API: ', error);
  		}
  	});
  	//$.getJSON('/api/v1/teams.json', (response) => { this.setState({ teams: response }) });
  }

  handleAdd(event) {
  	var teams = this.state.teams;
  	teams.push(event);
  	this.setState({teams: teams});
  }

 
	render() {
		return(
			<div>
				<NewSquad handleAdd={(i) => this.handleAdd(i)} />
				<AllSquads teams={this.state.teams} />
			</div>
		);
	}
}