import {useState} from "react";
import {ChildArea} from "./ChildArea.jsx";
import "./App.css";

export default function App() {
  console.log("app");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);

  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
