class NewTeam extends React.Component{
	constructor(props) {
		super(props);
    this.state = {
			name:'',
			sdm:'',
			techlead:'',
			tpm:'',
			pm:'',
			sm:''
		};
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(e) {
    if (this.validForm()) {
      $.ajax({
        url: '/api/v1/teams',
        method: 'POST',
        data: { 
          team: {
            name: this.state.name,
            sdm: this.state.sdm,
            techlead: this.state.techlead,
            tpm: this.state.tpm,
            pm: this.state.pm,
            sm: this.state.sm
          }
        },
        success: (response) => {
          this.props.handleSubmit(data);
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
      	<button type="submit" className="btn flatt-butt-md flat-primary-butt">Save</button>
      </form>
    );
  }
}