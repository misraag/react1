
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButtton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';


function App() {
  const [selected, setSelected] = useState(null);

  
  function handleSelect(name) {
    setSelected(name);
  }

  let tabContent = <p>Please select a button.</p>
  if(selected) {
    tabContent = (
    <div id="tab-content">
    <h3 >{EXAMPLES[selected].title}</h3>
    <p>{EXAMPLES[selected].description}</p>
    <pre>
      <code>
        {EXAMPLES[selected].code}
      </code>
    </pre>
    </div>);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcepts key={item.title} {...item}></CoreConcepts>)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selected==='components'? true : false} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selected==='jsx'? true : false} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selected==='props'? true : false} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selected==='state'? true : false} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
            
          
        </section>
        
      </main>
    </div>
  );
}

export default App;
