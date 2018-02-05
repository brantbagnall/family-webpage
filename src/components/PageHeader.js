import React, { Component } from 'react';

export default class PageHeader extends Component {
    render() {
        return (
        <div className='pageheader-main' >
            <div className='pageheader-side' >
                t
            </div>
            <div className='pageheader-center' >
                {this.props.title}
            </div>
            <div className='pageheader-side' >
                <div>
                    <a href='/api/auth/logout' >
                        <button>
                            Logout
                        </button>
                    </a>
                </div>
            </div>
        </div>
        )
    }
}
