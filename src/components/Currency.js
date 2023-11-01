import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ()=>{
    const {dispatch} = useContext(AppContext)
    const handleCurrencyChange = (event)=>{
        const newCurrencyValue = event.target.value
        dispatch({
            type:'CHG_CURRENCY',
            payload:newCurrencyValue,
        })
    }
    return(
        <div className='alert alert-secondary'>
            <label style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >Currency
            <select className="custom-select" id="inputGroupSelect01" onChange={handleCurrencyChange}>
                <option defaultValue value="£" name="pound">£ Pound</option>
                <option style={{color:'black'}} value="$" name="dollar"> $ Dollar</option>
                <option style={{color:'black'}} value="€" name="euro">€ Euro</option>
                <option style={{color:'black'}} value="₹" name="ruppee">₹ Ruppee</option>
            </select>
            </label>
        </div>
    )

}

export default Currency
