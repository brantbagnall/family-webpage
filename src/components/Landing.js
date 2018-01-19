import React, { Component } from 'react';
import {connect} from 'react-redux';
import {doTest} from '../ducks/reducer';

class Landing extends Component {

    componentDidMount(){
        this.props.doTest();
    }



    render() {
        return (
        <div>
            {this.props.test}
        </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {doTest}) (Landing)