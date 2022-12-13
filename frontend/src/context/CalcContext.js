import { createContext, useState } from "react"
import axios from 'axios';
export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
  const URL = 'http://localhost:8080/api';
  switch(operation){  
   const a=1;
   const b=1;
    axios.post(URL,a,b);
  }
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const providerValue = {
    calc, setCalc
  }

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider