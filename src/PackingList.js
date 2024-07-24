
import { useState } from 'react';
import Item from './Item'
export default function PackinglList({ items, onDeleteItem, onToggleItem }) {
    const [clear, setClear] = useState(false);
    const [sortBy, setSortBy] = useState("input");
    function onClear() {
        items.length = 0;
        setClear(false);
    }
    let sortedItems = items;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
    console.log(sortedItems, items);


    return (
        <div className='list'>
            <ul className=''>
                {sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='input'>sort by input order</option>
                    <option value='description'>sort by description</option>
                    <option value='packed'>sort by packed status</option>
                </select>
                {
                    clear ?
                        <div>
                            <p>Are you sure you want to delete the list?</p>
                            <button onClick={() => onClear()}>ok</button>
                            <button onClick={() => setClear(false)}>no</button>
                        </div>
                        :
                        <button onClick={() => setClear(true)}>Clear list</button>

                }


            </div>
        </div>
    )
}