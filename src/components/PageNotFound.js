import React, { Component } from 'react';
import Header from './Header';


export default class PageNotFound extends ( Component ){

    render(){
        return (
            
            <div className="container">
                
                I'm so sorry, but I can't find the page you're looking for.  I'm tempted to be snarky about this, since it's such a small site, but it could totally be my fault, which would just make me feel bad about being snarky.  So I'll just ask you to please use the menu at the top right to go navigate to a valid page.  Thanks!

            </div>
            
        );
    }
}