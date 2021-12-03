import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Select from './components/Select';

function App() {
  const [selectedItem, setSelectedItem] = useState<string>();

  return (
    <div className='App'>
      <Select
        onSelect={(item) => {
          console.log(item);
          setSelectedItem(item);
        }}></Select>
      {selectedItem && <Result value={selectedItem}></Result>}
    </div>
  );
}

export default App;
