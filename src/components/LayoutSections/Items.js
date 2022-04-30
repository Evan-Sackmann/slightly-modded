import React, { useState, useEffect } from "react";
import { ItemList } from "../../listData";

export default function Items({ skills }) {
  const [itemArray, setItemArray] = useState([]);
  useEffect(() => {
    let items = ItemList.map((item) => {
      if (skills.includes(item.skill) || item.skill === "All") {
        return (
          <li key={item.itemName}>
            <a href={item.link}>{item.itemName}</a>
          </li>
        );
      }
    });

    setItemArray(items);
  }, [skills]);

  return (
    <div className="items">
      <h2>Items</h2>
      {itemArray}
    </div>
  );
}
