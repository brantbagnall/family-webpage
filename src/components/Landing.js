import React, { Component } from 'react';
import {connect} from 'react-redux';
import {} from '../ducks/reducer';

class Landing extends Component {

    componentDidMount(){

    }

    render() {
        return (
        <div className='landing-background-img landing-flex-center-column' >
            <div className='landing-button-background landing-flex-center-column' >
            <h1>
                The Underhills
            </h1>
                <a href='/api/auth0/auth' >
                    <button  >
                        Login
                    </button>
                </a>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {}) (Landing)