var NewTeam = createReactClass({
	componentDidMount() {
		console.log('All Teams Component mounted');
	},

	propTypes: {
    name: PropTypes.string,
    sdm: PropTypes.string,
    techlead: PropTypes.string,
    tpm: PropTypes.string,
    pm: PropTypes.string,
    sm: PropTypes.string
  },
	getInitialState: function() {
		return {
			name:'',
			sdm:'',
			techlead:'',
			tpm:'',
			pm:'',
			sm:''
		}
	},

  render: function() {
    return (
      <div>
        <h2>New Team</h2>
        <form className="form-inline" onSubmit={this.handleAdd}>
        	<div className="form-group">
	        	<input type="text" name="name" placeholder='Enter the team name' />
	        	<input type="text" name="sdm" placeholder='Enter the name of the team manager' />
	        	<input type="text" name="techlead" placeholder='Enter the name of the tech lead' />
	        	<input type="text" name="tpm" placeholder='Enter the name of the TPM' />
	        	<input type="text" name="pm" placeholder='Enter the name of the Product Manager' />
	        	<input type="text" name="sm" placeholder='Enter the name of the Scrum Master' />
	        	<button type="submit" className="btn flatt-butt-md flat-primary-butt">Save</button>
        	</div>
        </form>
      </div>
    );
  },

  handleAdd() {
    console.log(self.state);
		$.ajax({
      url: '/api/v1/teams',
      method: 'POST',
      data: { team: self},
      success: function(data) {
        self.props.handleAdd(data);
        self.setState(self.getInitialState());
      },
      error: function(xhr, status, error) {
        alert('Cannot add new record: ', error);
      }
    })
	}
});