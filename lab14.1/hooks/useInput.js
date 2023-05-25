import { useState } from "react"

 const useInput =(validate)=>{
    const [inputValue,setInputValue] = useState("");
    const [isTouch, setIsTouch]= useState(false);
    const inputIsValid= validate(inputValue);
    const hasError = isTouch && !inputIsValid;
    function inputChangeHandler (event){
        setInputValue(event.target.value)
    }
    function inputBlurHandler (){
        setIsTouch(true)
    }
    function reset(){
        setInputValue('');
        setIsTouch(false)
    }
    return{
        inputValue,
        inputIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
 }
 export default useInput;