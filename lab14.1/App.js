import logo from './logo.svg';
import './App.css';
import useInput from './hooks/useInput';

function App() {
  const {
    inputValue : nameValue,
    inputIsValid : nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
}= useInput(value=> value.trim() !=="");

    const{
      inputValue : emailValue,
      inputIsValid : emailIsValid,
      hasError: emailHasError,
      inputChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmail
    } = useInput(value=> value.includes("@"));

    let formIsValid =false;

    if(nameIsValid && emailIsValid){
      formIsValid=true;
    }

    function submitHandler(e){
      e.preventDefault();
      console.log(nameValue,emailValue)
      resetName();
      resetEmail();
    }
    const nameClasses = nameHasError ? "form-control invalid" : "form-control";
    const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (<form className='app' onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input id="name" 
        type="text" 
        onChange={nameChangeHandler} 
        onBlur={nameBlurHandler} 
        value={nameValue}></input>
        {nameHasError && <p className='error-text'>please input valid name</p>} 
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input id="email" type="email" 
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailValue}></input>
        {emailHasError && <p className='error-text'>please input valid email</p>}
      </div>
      <div className='form-actions'>
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
    
  );
}

export default App;
