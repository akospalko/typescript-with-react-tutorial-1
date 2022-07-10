import React, { useState } from 'react';
import '../App.css';
import { IWatchCollection as Props } from '../Interfaces/IWatchCollection';

interface IProps {
    watches: Props['watches'],
    setWatches: React.Dispatch<React.SetStateAction<Props['watches']>>
}

//Handling Events
const AddToList: React.FC<IProps> = ( {watches, setWatches}) => {
    const stateInitializer = {
        name: "",
        price: "",
        img: "",
        description: ""
    }
    const [input, setInput] = useState(stateInitializer);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => { // input field event type === onChange = {(e) => {}}
        setInput({
            ...input, 
            [e.target.name] : e.target.value            
        })
    }

    const clickHandler = (): void => {
        if(!input.name || !input.price) {
            return
        }
        setWatches([
            ...watches, 
            {
                name: input.name,
                url: input.img,
                price: parseInt(input.price),
                description: input.description,
            }
        ])        
        setInput(stateInitializer);
    }

    return (
        <div className="AddToList">
            <input 
                type="text" 
                placeholder="Name" 
                className='AddToList-input'
                name='name'
                value={input.name}
                onChange={changeHandler}
           />
            <input 
                type="text" 
                placeholder="Price €" 
                className='AddToList-input'
                name='price'
                value={input.price}
                onChange={changeHandler}
            />    
           
            <input 
                type="text" 
                placeholder="image URL" 
                className='AddToList-input'
                name="img"
                value={input.img}
                onChange={changeHandler}
            />
            <textarea 
                placeholder="Description" 
                className='AddToList-input'
                name='description'
                value={input.description}
                onChange={changeHandler}
            />
            <button
                className='AddToList-btn'
                onClick={clickHandler}
            >
                Add
            </button>
        </div>
    )
};

export default AddToList; 