class NewTeam extends React.Component{
	constructor(props) {
		super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(e) {
    if (this.validForm()) {
      e.preventDefault();
      team = { team : this.props.newTeam };
      $.ajax({
        url: '/api/v1/teams',
        method: 'POST',
        data: team,
        success: (response) => {
          this.props.handleSubmit(team);
        },
        error: (xhr, status, error) => {
          alert('Cannot add new record: ', error);
        }
      });
    } else {
      alert('Please fill in all fields');
    }
  }

  validForm() {
    if (this.state.name && this.state.sdm && this.state.techlead &&
        this.state.tpm && this.state.pm && this.state.sm ) {
      return true;
    } else {
      return false;
    }
  }

  handleChange(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({[input_name] : value });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleAdd}>
      	<div className="form-group">
        	<input type="text" 
        			   name="name" 
        			   placeholder='Enter the team name'
        			   onChange={this.handleChange} />
        </div>
      	<div className="form-group">
        	<input type="text" 
        				 name="sdm" 
        				 placeholder='Enter the name of the team manager'
        			   onChange={this.handleChange} />
        </div>
      	<div className="form-group">	
        	<input type="text" 
        				 name="techlead" 
        				 placeholder='Enter the name of the tech lead'
        			   onChange={this.handleChange} />
        </div>
      	<div className="form-group">
        	<input type="text" 
        				 name="tpm" 
        				 placeholder='Enter the name of the TPM'
        			   onChange={this.handleChange} />
        </div>
      	<div className="form-group">
        	<input type="text" 
        				 name="pm" 
        				 placeholder='Enter the name of the Product Manager'
        			   onChange={this.handleChange} />
        </div>
      	<div className="form-group">
        	<input type="text" 
        				 name="sm" 
        				 placeholder='Enter the name of the Scrum Master'
        			   onChange={this.handleChange} />
        </div>
      	<button onClick={()=> this.handleAdd(e)} className="btn flatt-butt-md flat-primary-butt">Save</button>
      </form>
    );
  }
}