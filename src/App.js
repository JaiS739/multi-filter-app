import logo from './logo.svg';
import './App.css';
import FilterPanel from './components/FilterPanel';
import Items from './components/Items';
import { itemData } from './item-data';
import { useState } from 'react';
import { Grid } from '@mui/material';

function App() {
  const [itemDatas, setItemDatas] = useState(itemData);

  const handleFilters = (value) => {
    const filtered_value = itemData.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`
    if(fullName.toLowerCase().includes(value.toLowerCase())){
      return item;
    }})
   setItemDatas(filtered_value)
  }
  
  return (
    <div className="container">
     
      <FilterPanel handleFilters={handleFilters}/>
      <Grid container spacing={2}>
      {itemDatas.map((item)=>(
        <Items key={item.id} item={item} />
      ))}
      </Grid>
     
    </div>
  );
}

export default App;
