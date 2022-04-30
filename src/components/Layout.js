import React, { useState } from "react";
import Guilds from "./LayoutSections/Guilds";
// import Items from "./LayoutSections/Items";

export default function Layout({ archetype }) {
  const [skillList, setSkillList] = useState([]);

  function updateSkills(val) {
    if (skillList.includes(val)) {
      let newArray = skillList.filter((skill) => skill !== val);
      return setSkillList(newArray);
    } else {
      return setSkillList((prev) => [...prev, val]);
    }
  }
  return (
    <div className="layout">
      {archetype === "warrior" && (
        <div className="skills">
          <h2>Skills</h2>
          <ul className="skill-list">
            <li onClick={() => updateSkills("Smithing")}>Smithing</li>
            <li onClick={() => updateSkills("Heavy-Armor")}>Heavy Armor</li>
            <li onClick={() => updateSkills("Block")}>Block</li>
            <li onClick={() => updateSkills("Two-Handed")}>Two-Handed</li>
            <li onClick={() => updateSkills("One-Handed")}>One-Handed</li>
            <li onClick={() => updateSkills("Archery")}>Archery</li>
            <li onClick={() => updateSkills("Enchanting")}>Enchanting</li>
          </ul>
        </div>
      )}
      {archetype === "mage" && (
        <div className="skills">
          <h2>Skills</h2>
          <ul className="skill-list">
            <li onClick={() => updateSkills("Illusion")}>Illusion</li>
            <li onClick={() => updateSkills("Conjuration")}>Conjuration</li>
            <li onClick={() => updateSkills("Destruction")}>Destruction</li>
            <li onClick={() => updateSkills("Restoration")}>Restoration</li>
            <li onClick={() => updateSkills("Alteration")}>Alteration</li>
            <li onClick={() => updateSkills("Enchanting")}>Enchanting</li>
            <li onClick={() => updateSkills("Alchemy")}>Alchemy</li>
          </ul>
        </div>
      )}
      {archetype === "thief" && (
        <div className="skills">
          <h2>Skills</h2>
          <ul className="skill-list">
            <li onClick={() => updateSkills("Light-Armor")}>Light Armor</li>
            <li onClick={() => updateSkills("Sneak")}>Sneak</li>
            <li onClick={() => updateSkills("Lockpicking")}>Lockpicking</li>
            <li onClick={() => updateSkills("Pickpocket")}>Pickpocket</li>
            <li onClick={() => updateSkills("Speech")}>Speech</li>
            <li onClick={() => updateSkills("Alchemy")}>Alchemy</li>
            <li onClick={() => updateSkills("Archery")}>Archery</li>
          </ul>
        </div>
      )}
      <Guilds school={archetype} skills={skillList} />
      {/* <Items skills={skillList} /> */}
    </div>
  );
}
