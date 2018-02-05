import React, { Component } from 'react';
import PageHeader from './PageHeader';

export default class Blog extends Component {
    render() {
        return (
        <div>
            <PageHeader title='Home' />
            <div className='blog-trifecta' >
                <div className='blog-side' >
                    a
                </div>
                <div className='blog-center' >  
                    b
                </div>
                <div className='blog-side' >
                    c
                </div>
            </div>
        </div>
        )
    }
}
