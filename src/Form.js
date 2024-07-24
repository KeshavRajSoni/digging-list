import { useState } from "react";

export default function Form({ addItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    // const [test, setTest] = useState([]);
    // function testf(newItem) {
    //   console.log(newItem);
    //   setTest((test) => [...test, newItem]);
    // }

    function handelSubmit(e) {
        e.preventDefault();
        if (!description) {
            alert("plese provide item name")
            return;
        }
        const newItem = { id: Date.now(), description, quantity, packed: false };
        console.log(newItem);
        addItems(newItem);
        setDescription("");
        setQuantity(1);

    }
    return (
        <form className='add-form' onSubmit={handelSubmit}>
            <h3>What do you need for digging dip.</h3>
            <select value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)) }}>
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num} >{num}</option>)
                }
            </select>
            <input type='text' placeholder='item...' value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
            <button>add</button>
        </form>
    )
}