import * as React from 'react';
import Cardlist from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

export interface IRobot {
	name: string;
	id: number;
	email: string;
}

interface IAppProps {

}

interface IAsppState {
	robots: Array<IRobot>;
	searchfield: string;
}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props) {
		super(props)
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(users => {this.setState({ robots: users}) });
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.currentTarget.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ? 
		  <h1>Loading...</h1> :
		  (
			  <div className='tc'>
				  <h1 className='f1'>RoboFriends</h1>
				  <SearchBox searchChange={this.onSearchChange} />
				  <Scroll>
					  <Cardlist robots={filteredRobots} />
				  </Scroll>
			  </div>
		  )
	}
}

export default App;