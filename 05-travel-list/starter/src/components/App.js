import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import States from "./States.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed };
      })
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear the list?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onHandleAddItem={handleAddItem}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      ></PackingList>
      <States items={items}></States>
    </div>
  );
}