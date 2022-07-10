import React from 'react';
import  { IWatchCollection as IProps } from '../Interfaces/IWatchCollection';

//Handling props
const List: React.FC<IProps> = ({ watches }) => { // specify Functional Component type, implementing an IProps interface and destructuring the prop 
   //Function Types:
    const renderList = () :JSX.Element[] =>  {
        return watches.map(watch => {
            return (
                <li className="List">
                    <div className='List-img'>
                        <a
                            href={watch.url}    
                            target="blank"
                        >
                            <img src={watch.url} />
                        </a>
                    </div>
                    <div className='List-name'>
                        <h2> {watch.name} </h2>
                    </div>
                    <div className='List-price'>
                        <p>{watch.price} €</p>
                    </div>  
                    <div className='List-description'>
                        <p> {watch.description} </p>
                    </div>
                </li>
            )
        })
    } 
    
    return (
        <div>
            {renderList()}
        </div>
    )
};

export default List; 
