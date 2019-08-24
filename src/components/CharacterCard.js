import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterCard extends Component {

     render() {

          return (
               <div className="Information">
                    <div className="dataWrapper">
                         {!this.props.data ? <h1>loading...</h1> : this.props.data.map((m, index) => {
                              return (
                                   <li key={index}>{m.name}</li>
                              );
                         })}
                    </div>
               </div>
          )
     }
}

const mapStateToProps = state => ({
     data: state.dataReducer.data.results
});

export default connect(mapStateToProps)(CharacterCard);