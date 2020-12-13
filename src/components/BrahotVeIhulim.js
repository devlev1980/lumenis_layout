import React, {Component} from 'react';

import './Brahot.css';

class BrahotVeIhulim extends Component {
    state = {
        brahot: [
            {
                id: 1,
                iconUrl: '',
                text: 'Link 1',
                iconBtn: ''
            },
            {
                id: 2,
                iconUrl: '',
                text: 'Link 2',
                iconBtn: ''
            },
            {
                id: 3,
                iconUrl: '',
                text: 'Link 3',
                iconBtn: ''
            },
            {
                id: 4,
                iconUrl: '',
                text: 'Link 4',
                iconBtn: ''
            },
            {
                id: 5,
                iconUrl: '',
                text: 'Link 5',
                iconBtn: ''
            },
            {
                id: 6,
                iconUrl: '',
                text: 'Link 6',
                iconBtn: ''
            },
            {
                id: 7,
                iconUrl: '',
                text: 'Link 7',
                iconBtn: ''
            },
            {
                id: 8,
                iconUrl: '',
                text: 'Link 8',
                iconBtn: ''
            },
            {
                id: 9,
                iconUrl: '',
                text: 'Link 9',
                iconBtn: ''
            },
            {
                id: 10,
                iconUrl: '',
                text: 'Link 10',
                iconBtn: ''
            }
        ]
    }
    render() {
        return (
            <div className="right">
               <h2>Brahot ve ihulim</h2>
                <div >
                    <ul className="brahot_wrapper">
                        {
                            this.state.brahot.map((link)=>{
                                return <li>{link.text}</li>

                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
}

export default BrahotVeIhulim;
