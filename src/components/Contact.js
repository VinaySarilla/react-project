import React, { Component } from 'react'
import { FaMapMarkerAlt , FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import Title from './Title'


export default class Contact extends Component {
    state={
        services:[
            {
                icon:< FaMapMarkerAlt />,
                title:"Mumbai Maharashtra India",
                },
            {
                icon:< FaPhoneAlt />,
                title:"+91 8554949004",
            },
            {
                icon:< FaMailBulk />,
                title:"ssdelivery@gmail.com",
            },
        ]
    }
    render() { 
        return (
            <section className="se">
              <Title title="Contact" />
              <p>Ship any thing you want with us at lowest cost</p>  
              <div className="se-center">
                  {this.state.services.map((item,index)=>{
                      return<article key={index} className="se">
                      <span>{item.icon}</span>
                        <h6>{item.title}</h6> 
                      </article>
                  })
                 }
            </div>
            </section>
          );
    }
}
 
