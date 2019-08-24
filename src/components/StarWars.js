import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../action/getData';
import CharacterCard from "./CharacterCard";

class StarWars extends Component {

     componentDidMount(){
          this.props.getData();
     }

     render() {
          return (
               <div>
                    <h1>We count all star war characters and they are:</h1>
                    <h2>{this.props.count}</h2>
                    <CharacterCard />
               </div>
          );
     }
}

// const mapStateToProps = state => ({ //we want to return an object
//      count: state.dataReducer.data.count
// });

const mapStateToProps = state => {
     return {
          count: state.dataReducer.data.count
     }
}

export default connect(mapStateToProps, { getData })(StarWars);