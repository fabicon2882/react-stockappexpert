import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddStock = ({ setStocks }) => {


    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setStocks(stocks => [inputValue, ...stocks]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddStock.propTypes = {
    setStocks: PropTypes.func.isRequired
}

