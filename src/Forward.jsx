
import React, { useEffect, useRef, useState } from "react";

const InputText = React.forwardRef((props, ref) => (
    //forward ref is used to pass refrences 
    //from child components to parent components
    // if state functions are used in place of forward ref, changing value from
    // child component is complex,leading to re-rendering onChange={(e)=>props.changeinput(e.target.value)}
   
    <>
    {/* <div >
    {props?.inputValue}
    </div> */}
    <input ref={ref} placeholder={props.placeholder} />
    </>
));
const InputFromState=({inputValue,changeInput})=>{
    return(
        <>
        <h2>This input is to compare between forward ref and state variable</h2>
        <input type={'text'} onChange={(e)=>changeInput(e.target.value)}/>
        </>
    )
}

export default function Forward() {
    const inputRef = useRef();
    const [inputValue,setInputValue]=useState("")
    const clickHandler = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };

    const changeInput=(val)=>{
        // console.log(val,"from changeInput")
        setInputValue(val)
    }
    useEffect(()=>{
        console.log(inputRef.current.value);
        console.log("Itertaion/ Re-rendering")
    },)

    return (
        <div >
            <h1>React JS Forward Ref</h1>
            <form>
                {/* <input ref={inputRef} /> */}
                <InputText ref={inputRef} placeholder="Enter some value" inputValue={inputValue} changeinput={changeInput}/>
                <button onClick={clickHandler}>Click Here</button>
            </form>
            <InputFromState inputValue={inputValue} changeInput={changeInput}/>
        </div>
    );
}
