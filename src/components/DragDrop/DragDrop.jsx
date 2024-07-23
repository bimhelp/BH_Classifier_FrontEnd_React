import React, { useState } from "react";
import { Card, List } from "./DragDrop.styled";

const initialItems = [
  {
    id: 1,
    order: 1,
    text: "card 1",
  },
  {
    id: 2,
    order: 2,
    text: "card 2",
  },
  {
    id: 3,
    order: 3,
    text: "card 3",
  },
  {
    id: 4,
    order: 4,
    text: "card 4",
  },
  {
    id: 5,
    order: 5,
    text: "card 5",
  },
];

const DragDrop = () => {
  const [items, setItems] = useState(initialItems);
  return (
    <List>
      {items.map((item) => (
        <Card
          key={item.id}
          draggable={true}
          onDragStart={(event) => {
            console.log("drag start", event);
          }}
          onDragLeave={(event) => {
            console.log("drag leave", event);
          }}
          onDragEnd={(event) => {
            console.log("drag end", event);
          }}
          onDragOver={(event) => {
            console.log("drag over", event);
          }}
          onDrop={(event) => {
            console.log("on Drop", event);
          }}
        >
          {item.text}
        </Card>
      ))}
    </List>
  );
};

export default DragDrop;
