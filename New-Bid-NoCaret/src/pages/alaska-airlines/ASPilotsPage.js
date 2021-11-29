import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "../../css/bidpro.module.css"
import {useSelector, useDispatch} from "react-redux";
import {selectCount, addInputAmount} from "../../redux/counterSlice";


const ASPilotsPage = () => {

    
const count = useSelector(selectCount);
const dispatch = useDispatch();
const [addAmount, setAddAmount] = useState("");
const addValue = Number(addAmount) || 0 ;

const [error, setError] = useState("");

  const onAddButtonClicked = () => {
    if (addAmount < 1 ) {
        setError("Please enter a number between 1 and 999.")
    } else if (addAmount >= 999){
        setError("Please enter a number between 1 and 999.")
    } else {
        setError ("")
        dispatch(addInputAmount(addValue))
    }
 }

    return (
    <>
    <div>
        <h1>Alaska Airlines Pilots Page</h1>
        <div className={`${styles.row} ${styles.value}`}>Counter: {count}</div>
       
            <div className={styles.row} >
                <input
                type="textbox"
                className={styles.input}
                aria-label="Add amount"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))} />

                <button className={styles.button} onClick={onAddButtonClicked }>Add Amount</button>
            </div>

            <span className={`${styles.row} ${styles.error}`}>{error}</span>
        </div>

        <div className={`${styles.row} ${styles.home}`}>
            <Link to="/">Home</Link>
        </div>
    </>
    )
};



export default ASPilotsPage;
