import React, { Component } from 'react'
import { FaRunning, FaTruckMoving, FaHandshake, FaScroll } from "react-icons/fa";
import Title from './Title'


export default class Services extends Component {
    state={
        services:[
            {
                icon:< FaRunning />,
                title:"Fast Service",
                info:'Get your consignment transportated quickly all over india through our service'
            },
            {
                icon:< FaHandshake />,
                title:"Safety and Security",
                info:'We transport your consignment safely and securely'
            },
            {
                icon:< FaTruckMoving />,
                title:"Track Consignment",
                info:'Get all the info about where your consigment currently is, through tracking service'
            },
            {
                icon:< FaScroll />,
                title:"Insurance",
                info:'We know how valuable is your consignment is to you, So we get it Insuranced before transporting'
            },
        ]
    }
    render() { 
        return (
            <section className="services">
              <Title title="sevices" />  
              <div className="services-center">
                  {this.state.services.map((item,index)=>{
                      return<article key={index} className="services">
                      <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                         <p>{item.info}</p>  
                      </article>
                  })
                 }
            </div>
            </section>
          );
    }
}
 
