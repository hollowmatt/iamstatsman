class Squad extends React.Component {
	
	handleUpdate(e) {
    e.preventDefault();
    if (this.validRecord()) {
      var event_data = {
        name: this.recordValue("name"),
        description: this.recordValue("description"),
        date: this.recordValue("date"),
        place: this.recordValue("place")
      };
      $.ajax({
        method: 'PUT',
        url: '/api/events/' + this.props.event.id,
        data: { event: event_data },
        success: function(data) {
          this.props.handleUpdateRecord(this.props.event, data);
          this.setState({ edit: false });
        }.bind(this),
        error: function(xhr, status, error) {
          alert('Cannot update requested record: ', error);
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  }

	render() {
		var team = this.props.team
		var idx = this.props.idx
		return(
			<tr key={idx}>
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
          	<i class="material-icons red419">delete</i>
        	</a>
        	<a className="btn-flat btn-xs"
           onClick={this.handleEdit} >
          	<i class="material-icons orange600">edit</i>
        	</a>
				</td>
			</tr>
		);
	}
}