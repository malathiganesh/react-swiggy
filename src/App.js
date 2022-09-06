// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
// import Products from './components/product/product';
import Login from './components/login/login';
import Expenses from './components/mylist';


function App() {
  const [isLoggedin, setLoggedIn] = useState(false);

  const loginHandler = (islogin) => {
    setLoggedIn(islogin);
  }




  return (
    <div className="App">

      <Header></Header>
      {isLoggedin ? <Expenses logout={loginHandler} /> : <Login isLoggedin={loginHandler} />
      }

      {/* <Products></Products> */}

    </div>
  );
}

export default App;
