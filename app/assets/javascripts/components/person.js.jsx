class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			names: [
				{first: "joe", last: "dimagio"},
				{first: "hank", last: "aaron"},
				{first: "babe", last: "ruth"}
			],
		}
	}

	componentDidMount() {

	}

	render() {
		return(
			<div>
				<AllNames names={this.state.names} />
			</div>
		);
	}

}