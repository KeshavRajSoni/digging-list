
import { useState } from 'react';
import './App.css';
import Logo from './Logo'
import Form from './Form'
import PackinglList from './PackingList'
import Item from './Item'
import Stats from './Stats'


const diggingItems = [
  { id: 1, description: "Shovel", quantity: 1, packed: false },
  { id: 2, description: "Spade", quantity: 2, packed: false },
  { id: 3, description: "Garden Fork", quantity: 1, packed: false },
  { id: 4, description: "Hand Trowel", quantity: 3, packed: false },
  { id: 5, description: "Mattock", quantity: 1, packed: false },
  { id: 6, description: "Hoe", quantity: 2, packed: false },
  { id: 7, description: "Pickaxe", quantity: 1, packed: false },
  { id: 8, description: "Post Hole Digger", quantity: 2, packed: false },
  { id: 9, description: "Trenching Shovel", quantity: 1, packed: false },
  { id: 10, description: "Hand Auger", quantity: 3, packed: false }
];

function App() {
  const [items, setItems] = useState(diggingItems);

  function addItems(newItem) {
    console.log(newItem);
    setItems((items) => [...items, newItem]);
  }
  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }
  return (
    <div className="App">
      <Logo />
      <Form addItems={addItems} />
      <PackinglList items={items} onDeleteItem={handelDeleteItem} onToggleItem={handelToggleItem} />
      <Stats items={items} />
    </div>
  );
}












export default App;
