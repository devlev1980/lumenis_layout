import React, {Component} from 'react';
import './Kishurim.css'
class Kishurim extends Component {
    state = {
        links: [
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
            },
            {
                id: 5,
                text: 'Link 5'
            },{
                id: 6,
                text: 'Link 6'
            },{
                id: 7,
                text: 'Link 7'
            },{
                id: 8,
                text: 'Link 8'
            },
            {
                id: 9,
                text: 'Link 9'
            },
            {
                id: 10,
                text: 'Link 10'
            },
            {
                id: 11,
                text: 'Link 11'
            },
            {
                id: 12,
                text: 'Link 12'
            }

        ]
    }

    render() {
        return (
            <div>
               <div className="left">
                   <h3>Kishurim shimushim</h3>
                   <div >
                      <ul className="links_wrapper">
                          {
                              this.state.links.map((link)=>{
                                  return <li>{link.text}</li>

                              })
                          }
                      </ul>
                       <div className="sahar_ve_nohahut">
                           <img src="" alt=""/>
                           <span>Sahar ve nohahut</span>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default Kishurim;
