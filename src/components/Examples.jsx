import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButtton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selected, setSelected] = useState(null);

  function handleSelect(name) {
    setSelected(name);
  }

  let tabContent = <p>Please select a button.</p>;
  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        ComponentType="menu"
        button={
          <>
            <TabButton
              isSelected={selected === "components" ? true : false}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selected === "jsx" ? true : false}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selected === "props" ? true : false}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selected === "state" ? true : false}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
