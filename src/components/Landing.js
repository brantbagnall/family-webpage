import React, { Component } from 'react';
import {connect} from 'react-redux';
import {} from '../ducks/reducer';

class Landing extends Component {

    componentDidMount(){

    }



    render() {
        return (
        <div className='landing-background-img flex-centered' >
            <div className='landing-button-background flex-centered flex-column' >
            <h1>
                The Underhills
            </h1>
                <button  >
                    Login
                </button>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {}) (Landing)