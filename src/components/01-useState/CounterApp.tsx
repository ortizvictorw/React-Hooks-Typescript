import { useState } from "react";
import InitialEstate from "./couterInterface";
import { Button } from 'react-bootstrap';



const initialEstate = {
  counter1: 10,
  counter2: 20,
}

const CounterApp = () => {
  const [counter, setCounter] = useState<InitialEstate>(initialEstate);

  const { counter1, counter2 } = counter;

  return (
    <>
      <h1>Counter {counter1}</h1> 
      <h1>Counter {counter2}</h1> 

      <hr />
      <Button
        className="btn btn-primary"
        onClick={() => {
          setCounter({ 
            ...counter, 
            counter1: counter1 + 1});
        }}
      >
        +1
      </Button>
    </>
  );
};

export default CounterApp;
