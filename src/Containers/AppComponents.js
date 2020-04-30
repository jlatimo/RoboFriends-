import React,{Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
<<<<<<< HEAD
import { robots } from '../robots';
=======
// import { robots } from './robots';
>>>>>>> 0ef698ffc30e1a4a4c3b0944e7dd4deef913cc31
import '../Styles/AppStyles.css';

class AppComponents extends Component {
  //Contructor method to initiate state
  constructor() {
    super()
    this.state = {
      robots: robots,
      // robots:[],
      searchfield: ''
    }
  }

//ComponenetDidMount fetches external list of users
// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => this.setState({robots:users}));
// }

//OnSearch sets state of 
  onSearchChange = (event) =>{
    this.setState({searchfield:event.target.value})
    // console.log(event.target.value);
  }

  render() {
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robots =>{
      return (
        robots.name.toLowerCase().includes(searchfield.toLowerCase()) ||
         robots.email.toLowerCase().includes(searchfield.toLowerCase()) )
    })
    //Loadiing text
    return !robots.length ?
      <h1>Loading...</h1> :
      //Components to be Rendered
     ( 
        <div className='tc'>
            <h1 className='f1'>Robo Friends</h1>

            <SearchBar searchChange={this.onSearchChange} />

            <Scroll>
              <ErrorBoundry>
                <Cardlist robots = { filteredRobots }/>
              </ErrorBoundry>
            </Scroll>
            
        </div>
      );
    }
  }

export default AppComponents;