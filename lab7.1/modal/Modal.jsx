import "./Modal.css"
 function Modal(props){
    return<div className="back-drop">

    <div className="modal">
        <h2>
            Invalid{props.title}
        </h2>
        <p>{props.message}</p>
        <div className="btn">
            <button type="confirm" onClick={props.onConfirm}>Okay</button>
        </div>
    </div>
    </div>
 }
 export default Modal;