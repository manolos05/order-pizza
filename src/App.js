import { vegetables, meat, size } from './data/dataPizza';
import './App.css';
import { Pizza } from './components/Pizza';
import { ResumeOrder } from './components/ResumeOrder';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';

function App() {

const [vegetableState, setVegetable] = useState(vegetables);
const [meatState, setMeat] = useState(meat);
const [sizeState, setSize] = useState(size)


    const setActiveSize = (index, e) => {
      
      
      let newSize = [...sizeState]
      newSize[index].isActive = !newSize[index].isActive 
      setSize(!newSize[index]) 
    }

    const setAcitveVeg = (index) => {
      let newVegetables = [...vegetableState];
      newVegetables[index].isActive = !newVegetables[index].isActive;
      setVegetable(newVegetables)
    } 

  const setActiveMeat = (index) => {
    let newMeatState = [...meatState];
    newMeatState[index].isActive = !newMeatState[index].isActive;
    setMeat(newMeatState)
  }

  return (
    <div className="App">
      <h1>Order your Pizza</h1>

      <h5>Choose your Size</h5>
      {size.map(({sType, sPrice, sIcon, isActive} , i) =>{
          return (
            <Pizza 
            key={i} 
            icon={sIcon} 
            price={sPrice}
            type={sType} 
            isActive={isActive}
            onClick={() => {setActiveSize(i)}}
            />
          )
      })
      }

       <h5>Choose your Meat Ingredients</h5>
      {meat.map(({mType, mPrice, mIcon, isActive,} , i) =>{
          return (
            <Pizza 
            ey={i} 
            icon={mIcon} 
            price={mPrice} 
            type={mType}
            isActive={isActive}
            onClick={() => {
              setActiveMeat(i)}}
            />
          )
      })
      }

      <h5>Choose your Vegetables Ingredients</h5>
      {vegetables.map(({vType, vPrice, vIcon, isActive} , i) =>{
          return (
            <Pizza 
            key={i}
            icon={vIcon} 
            price={vPrice}
            type={vType}
            isActive={isActive}
            onClick={() => {setAcitveVeg(i)}}/>
          )
      })
      }

      <ResumeOrder 
      title="Complete your Order"
      buttonText="Order Here!"
      onClick={()=>
      alert("Your order will be prepared")}
      total="Total"
      />


    </div>
  );
}

export default App;
