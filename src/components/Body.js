import { React, useState, useEffect } from "react";
import Image from "./Image";
import API from "../constants";
import axios from "axios"
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin: 6px;
  padding: 10px;
  background-color: #aeb0b5;
  input, button {
    margin: 5px;
    padding: 5px;
    border: none;
    border-radius: 3px;
  }
`
const StyledBody = styled.div`
  background-color: #00a6d2;
  h1 {
    color: #5b616b;
  }
  p {
    margin: 10%, 0;
    padding: 5%;
    background-color: #e1f3f8;
    border: none;
    border-radius: 10px;
  }
`


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
    <StyledBody className="body">
      <StyledHeader>
        <input type={"date"} onChange={changeDate} defaultValue={activeDate} max={props.today}></input>
        <button onClick={setDate}>Get Image</button>
      </StyledHeader>
        <h1>
          {imageData && imageData.title}
        </h1>
        <Image date={activeDate} imageUrl={imageData && imageData.url}/>
        <p>
          {imageData && imageData.explanation}
        </p>
    </StyledBody>
  )
}

export default Body;