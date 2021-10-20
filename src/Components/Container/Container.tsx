import { useState } from "react";
import Previewer from "../Previewer/Previewer";
import marked from "marked";
import "./Container.scss";

// And if you want to get really crazy, even tables:
  
//   Wild Header | Crazy Header | Another Header?
//   ------------ | ------------- | -------------
//   Your content can | be here, and it | can be here....
//   And here. | Okay. | I think we get it.

function Container() {
  const [content, setContent] = useState(`# Getting Started 
  **React** is a JavaScript ~~framework~~ library for building user interfaces.
  Learn what _React_ is all about on [our homepage ](https://reactjs.org/) or [in the tutorial](https://reactjs.org/tutorial/tutorial.html).

  ![React Logo](https://uploads.toptal.io/blog/category/logo/291/react.png)
  
   **_console.log_** in code: \`console.log("Helloooo")\`
  
  \`\`\`
  // this is React code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  
  > ## Tip! 
  This guide is designed for people who prefer learning concepts step by step.
   If you prefer to learn by doing, check out our practical tutorial.
    You might find this guide and the tutorial complementary to each other.

  - INSTALLATION
    - Getting Started:
      - Create a New React App
      - CDN Links
  
  - MAIN CONCEPTS
  1. Hello World
  1. Introducing JSX 
  1. Rendering Elements
  1. etc...

  
  `);
  const textareaOnChange = (e: any) => {
    setContent(e.target.value);
    console.log("text::", marked(content));
  };
  return (
    <div className="container-wrap">
      <div className="header">
        <div className="buttons">
          <div></div>
          <div></div>
          <div></div>
        </div>
        Markdown Previewer
      </div>
      <section>
        {/* <Editor /> */}
        <textarea
          id="editor"
          value={content}
          onChange={(e) => textareaOnChange(e)}
        />
        <Previewer items={content} />
      </section>
    </div>
  );
}

export default Container;
