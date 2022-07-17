import React , { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";



const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick} />

}

const ModalOverLay = props => {
    return  <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div> 

}

const Modal = props => {
    const portalModal = document.getElementById('overlays');
    return <Fragment>
         {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />,portalModal)};
         {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalModal)};
    </Fragment>

}

export default Modal;