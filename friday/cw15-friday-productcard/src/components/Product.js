import { Component } from 'react';
import {products} from './data';
import './product.css';



class Product extends Component {
    constructor() {
        super();
        this.state = {data : products};
    }

    render() { 
        const {data} = this.state;
        
        return (
           <div>
           {data.map((product)=>
           <div className="container">
                <div className="cardBody">
                    <table>
                        <td className='title'>Product Name:</td><td className='explanation'>{product.name}</td> 
                        <td className='title'>Description:</td><td className='explanation'>{product.description}</td>
                        <td className='title'>Product Price:</td><td className='explanation'>{product.price}</td>
                    </table>
                </div>
           </div>
            )}
           </div>
            
        )
       
    }
}
 
export  {Product};
