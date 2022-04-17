import React, { Component, useState } from "react";

function App() {
  const [text, setText] = useState("");

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const file = e.target.result;
      setText(file);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={(e) => showFile(e)} />
      <textarea
        value={text}
        style={{ width: "100%", height: "500px" }}
      ></textarea>
    </div>
  );
}

export default App;
