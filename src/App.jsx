import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_Access_key;
function App() {
  const [goldRate, setGoldRate] = useState("")
  const [amount, setAmount] = useState(0)
  const [livePrice, setLivePrice] = useState(null)
  const [totalAmount, setTotalAmount] = useState(null)
  function getRate(){
    axios.get(`https://api.metalpriceapi.com/v1/convert?api_key=${apiUrl}&from=USD&to=INR&amount=${amount}&date=2025-03-01`)
    .then((response) => {
      console.log(response.data.result)
      setLivePrice(response.data.result)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {  
      getRate()
  },[amount])
  return (
    <>
      <div>
        <h1>Currency Convertor</h1>
        <div>
          <div>
            <input type="number" placeholder="Enter amount in USD" onChange={(e) => setAmount(e.target.value)} />
            <label>INR rate per USD: </label>
            <p>{livePrice}</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
