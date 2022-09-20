import { React, useState, useEffect } from "react";
import Image from "./Image";
import API from "../constants";
import axios from "axios"

const Body = (props) => {

  const changeDate = (event) => {
    setSelectedDate(event.target.value)
  }
  const setDate = () => {
    SetActiveDate(selectedDate)
  }

  const [activeDate, SetActiveDate] = useState(props.today)
  const [selectedDate, setSelectedDate] = useState(props.today)

  const [ imageData, setImageData ] = useState(null)

  useEffect(() => {
    axios.get(`${API.URL}?api_key=${API.KEY}&start_date=${activeDate}&end_date=${activeDate}`)
    .then((res) => {
      setImageData(res.data[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  useEffect(() => {
    axios.get(`${API.URL}?api_key=${API.KEY}&start_date=${activeDate}&end_date=${activeDate}`)
    .then((res) => {
      setImageData(res.data[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }, [activeDate])

  console.log("active", activeDate)
  return (
    <div className="body">
      <div>
        <input type={"date"} onChange={changeDate} defaultValue={activeDate} max={props.today}></input>
        <button onClick={setDate}>Get Image</button>
      </div>
        <h1>
          {imageData && imageData.title}
        </h1>
        <Image date={activeDate} imageUrl={imageData && imageData.url}/>
        <p>
          {imageData && imageData.explanation}
        </p>
      </div>
  )
}

export default Body;