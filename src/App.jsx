/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { HomePage } from "./Components/Pages/Home/HomePage";
import { createContext, useEffect, useState } from "react";
import axios from "axios";



const MyContext = createContext();
function App() {
  // Create a state object for the context

  const [countryList,setCountryList] = useState([]);
  const [selectedCountry ,setSelectedCountry] = useState('');


  useEffect (()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry = async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
      console.log(res.data.data)
    })
  }



  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry 
    

  }
  return (
    <BrowserRouter>
     <MyContext.Provider value={values}>
       <Header />
      {/* <HomePage/> */}
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
      </Routes>
   
      </MyContext.Provider>
       </BrowserRouter>
  );
}

export default App;
export { MyContext };
