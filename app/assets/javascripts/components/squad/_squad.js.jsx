class Squad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
		};
	}
	handleEdit(e) {
    e.preventDefault();
    if (this.validRecord()) {
      var event_data = {
      	name: this.recordValue("name"),
      	sdm: this.recordValue("sdm"),
      	techlead: this.recordValue("techlead"),
      	tpm: this.recordValue("tpm"),
      	pm: this.recordValue("pm"),
      	sm: this.recordValue("sm")
      };
      $.ajax({
      	method: 'PUT',
        url: '/api/v1/teams' + this.props.team_id,
        data: { event: event_data },
        success: (data) => {
          this.props.handleUpdateRecord(this.props.team_id, data);
          this.setState({ edit: false });
        }.bind(this),
        error: (xhr, status, error) => {
          alert('Cannot update requested record: ', error);
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  }

  validRecord() {
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
  	if(this.state.edit) {
  		return(this.renderForm());
  	} else {
  		return(this.renderData());
  	}
  }

  renderForm() {
  	return(
  		<a className="btn-flat btn-xs"
       onClick={this.handleToggle} >
      	<i className="material-icons orange600">edit</i>
    	</a>
  	);
  }

	renderData() {
		var team = this.props.team;
		return(
			<tr key={this.props.idx}>
				<td>
					{team.name} 
				</td>
				<td>
					{team.sdm}
				</td>
				<td>
					{ team.techlead}
				</td>
  			<td>
  				{team.tpm}
				</td>
  			<td>
  				{team.pm}
				</td>
  			<td>
  				{team.sm}
				</td>
				<td>
					<a className="btn-flat btn-xs"
           onClick={this.handleDelete} >
          	<i className="material-icons red419">delete</i>
        	</a>
        	<a className="btn-flat btn-xs"
           onClick={this.handleToggle} >
          	<i className="material-icons orange600">edit</i>
        	</a>
				</td>
			</tr>
		);
	}
}