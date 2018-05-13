class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			peeps: [],
		}
	}

	componentDidMount() {
		this.getDataFromApi();
	}

	getDataFromApi() {
		var self = this;
		$.ajax({
			url: '/api/v1/peeps.json',
			success: function(data) {
				self.setState({ peeps: data });
			},
			error: function(xhr, status, error) {
				alert('Cannot get peeps data from API: ', error);
			}
		});
	}

	render() {
		return(
			<div>
				<AllNames peeps={this.state.peeps} />
			</div>
		);
	}

}