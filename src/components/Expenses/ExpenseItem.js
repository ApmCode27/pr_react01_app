import { useState } from 'react';
import './ExpenseItems.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';



export function ExpenseItem(props){

   
    //updating purchase wiht useState

    const [title, setTitle] = useState(props.title);


    const clickHandler = () =>{
        setTitle('Updated!');
        console.log(title);
    }


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title} </h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}


