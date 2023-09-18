const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <States></States>
    </div>
  );
}

function Logo() {
  return <h1>🎁 Far Away 🎁</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 🎁 trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item}></Item>
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function States() {
  return (
    <footer className="stats">
      <em>🎉 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
