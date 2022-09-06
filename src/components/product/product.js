import './product.css';
import { useEffect, useState } from 'react';
import Fooditem from './fooditem';
import Form from '../form/form';
// import Form from '../form/form';

function Products(props) {
  const order = [
    {
      item: "Noodles",
      offer: 20,
      restaurant: "Taj Hotel",
      price: 210
    },
    {
      item: "Pizza",
      offer: 10,
      restaurant: "Cafe Bar",
      price: 110
    },
    {
      item: "Ice-Cream",
      offer: 10,
      restaurant: "Arun Ice-Creams",
      price: 150
    },
    {
      item: "Biriyani",
      offer: 25,
      restaurant: "Hotel Azad",
      price: 250
    }
  ]
  const [newcomp, setComp] = useState(order);
  // const [isLoggedin, setIsLoggedIn]=useState('')

  const newcomphandle = (comp) => {
    setComp((prevnewcomp) => { return [...[comp], ...prevnewcomp] });
    console.log(comp)
  }
  // useEffect(()=>{
  //   setIsLoggedIn(localStorage.getItem('login'))
  // },[])

  useEffect (()=>{
    fetch('https://6315e15733e540a6d386e913.mockapi.io/swiggy/swiggy').then((response)=>{
      if(response.ok){
        return response.json()
      }else {
        return false
      }
    }).then ((data)=>{
      setComp(data)
    })
  },[])

  return (
    <div>
      <div className='form-container'>
        <Form newcomponents={newcomphandle}></Form>
      </div>
        <div className='fooditem-container'>
          {/* <Fooditem item={order[0].item} price={order[0].price} offer={order[0].offer} restaurant={order[0].restaurant}></Fooditem> */}
          {
            newcomp.map((comp)=>{
              return <Fooditem key={Math.random()} item={comp.item} price={comp.price} offer={comp.offer} restaurant={comp.restaurant}></Fooditem>
            })
          }
          </div>

    </div>
  );

}
export default Products;