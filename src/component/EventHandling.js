import React from "react";

function EventHandling(){
    // state
    const [number, setNumber] = useState(0)

    // arrow function
    const addHandler = () => {
        number>=10 ? alert("Max number: 10") : setNumber(number+1)
    }

    const subHandler = () => {
        number<=0 ? alert("Number must not negative") : setNumber(number - 1)
    }

    return(
        <div className="container calculator">
        <h1 className="text-primary">{number}</h1>
        <button onClick={addHandler} className="btn btn-md btn-success my-3">Add (+)</button>
        <button onClick={subHandler} className="btn btn-md btn-danger my-3">Sub (-)</button>
      </div>
    )
}