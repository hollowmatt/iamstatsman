class NewSquad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			sdm: '',
			techlead: '',
			tpm: '',
			pm: '',
			sm: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({
  		team: {[input_name] : value }
  	});
  }

	render() {
    return (
      <form className="form-inline" >
        <div className="form-group">
          <input type="text" 
                 name="name" 
                 placeholder='Enter the team name'
                 value={this.state.name}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" 
                 name="sdm" 
                 placeholder='Enter the name of the team manager'
                 value={this.state.sdm}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">  
          <input type="text" 
                 name="techlead" 
                 placeholder='Enter the name of the tech lead'
                 value={this.state.techlead}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" 
                 name="tpm" 
                 placeholder='Enter the name of the TPM'
                 value={this.state.tpm}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" 
                 name="pm" 
                 placeholder='Enter the name of the Product Manager'
                 value={this.state.pm}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" 
                 name="sm" 
                 placeholder='Enter the name of the Scrum Master'
                 value={this.state.sm}
                 onChange={this.handleChange} />
        </div>
        <button type="submit" 
        				className="btn flatt-butt-md flat-primary-butt" 
        				onClick={() => this.props.onClick({ team: this.props.team })}>
        	Save
        </button>
      </form>
    );
  }
}