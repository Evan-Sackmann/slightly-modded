import React from "react";
import Items from "./Items";

export default function Guilds({ school, skills }) {
  return (
    <div>
      <div>
        {school === "warrior" && (
          <div className="guilds">
            <h2>Guilds</h2>
            <ul className="guild-list">
              <li>The Companions</li>
              <li>Bards' College</li>
              <li>Dawnguard</li>
              <li>Volkihar Vampires</li>
            </ul>
          </div>
        )}
        {school === "mage" && (
          <div className="guilds">
            <h2>Guilds</h2>
            <ul className="guild-list">
              <li>College of Winterhold</li>
              <li>Bards' College</li>
              <li>Dawnguard</li>
              <li>Volkihar Vampires</li>
            </ul>
          </div>
        )}
        {school === "thief" && (
          <div className="guilds">
            <h2>Guilds</h2>
            <ul className="guild-list">
              <li>Thieves Guild</li>
              <li>Bards' College</li>
              <li>Dawnguard</li>
              <li>Volkihar Vampires</li>
            </ul>
          </div>
        )}
      </div>
      <Items skills={skills} />
    </div>
  );
}
