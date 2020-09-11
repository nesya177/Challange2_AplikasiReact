import React, {Component} from 'react';
import Bank from './Component/bank.js'
import Bilangan from './Component/bilangan.js';
import Bmi from './Component/bmi.js';
import Harga from './Component/harga.js';
function App() {
  return (
    <div>
        <Bmi />
        <Bank />
        <Harga />        
        <Bilangan />
        <br></br>
      </div>
  );
}

export default App;
