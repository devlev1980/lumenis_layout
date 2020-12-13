import React, {Component} from 'react';
import './Main.css'
class Main extends Component {
    state = {
        meida : [
            {
                id: 1,
                iconUrl: '',
                text: 'Link 1',
                aHref: '#'
            },
            {
                id: 2,
                iconUrl: '',
                text: 'Link 2',
                aHref: '#'
            },
            {
                id: 3,
                iconUrl: '',
                text: 'Link 3',
                aHref: '#'
            },{
                id: 4,
                iconUrl: '',
                text: 'Link 4',
                aHref: '#'
            },{
                id: 5,
                iconUrl: '',
                text: 'Link 5',
                aHref: '#'
            },{
                id: 6,
                iconUrl: '',
                text: 'Link 6',
                aHref: '#'
            },{
                id: 7,
                iconUrl: '',
                text: 'Link 7',
                aHref: '#'
            },{
                id: 8,
                iconUrl: '',
                text: 'Link 8',
                aHref: '#'
            }
        ],
        giyus: [
            {
                id: 1,
                text: 'Link 1'
            },
            {
                id: 2,
                text: 'Link 2'
            },
            {
                id: 3,
                text: 'Link 3'
            },
            {
                id: 4,
                text: 'Link 4'
            }
        ],
        tmunot: [
            {
                id: 1,
                date: '23.03.20',
                text: 'Link 1'
            },
            {
                id: 2,
                date: '23.03.20',
                text: 'Link 2'
            },
            {
                id: 3,
                date: '23.03.20',
                text: 'Link 3'
            }
        ]
    }
    render() {
        return (
            <div className="main_container">
               <h1>Meida le ovdim</h1>
                <div >
                    <ul className="meida_wrapper">
                        {
                            this.state.meida.map((link)=>{
                                return <li>
                                    <div><i className="fa fa-address-book" aria-hidden="true"/></div>
                                    <label className="meida_text">{link.text}</label>
                                </li>
                            })
                        }
                    </ul>

                </div>
                <div className="tmunot_ve_giyus_wrapper"> <div className="tmunot">
                    <h3>Tmunot</h3>
                    <ul className="links">
                        {
                            this.state.tmunot.map((link) => {
                                return <li>{link.text}</li>
                            })
                        }
                    </ul>
                </div>
                    <div className="giyus_ve_niyud">
                        <h3>Giyus ve niyud</h3>
                        <ul className="links">
                            {
                                this.state.giyus.map((link) => {
                                    return <li>{link.text}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
