import {useState, useCallback, useMemo} from "react";
import {ChildArea} from "./ChildArea.jsx";
import "./App.css";

export default function App() {
  console.log("app");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);

  const onClickOpen = () => setOpen(!open);

  // アロー関数で記述すると、毎回新しい関数が再生成されて呼び出されていると判断される
  // そのため、useCallbackで囲む
  // 囲まれた関数は、第二引数のみを管理する
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
