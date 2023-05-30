import React, { useState } from 'react'

const FilterPanel = ({handleFilters}) => {
    const [inputValues, setInputValues] = useState("")

    const handleInputChange = (event)=>{
        const {value} = event.target;
        setInputValues(value)
        handleFilters(value)
    }

  return (
    <div className='bold2'>Filters:
        <div>
            <label htmlFor="">Name</label>
                <input type="text" placeholder='search-here' onChange={handleInputChange}/>
            <label htmlFor="">Gender</label>
            <select name="" id="">
                <option value="male">male</option>
            </select>
            
        </div>
    </div>
  )
}

export default FilterPanel