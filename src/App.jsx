/* eslint react-hooks/exhaustive-deps :off */
// es-lintをファイル内で無効にする場合はこのような指定をする。
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
// ↑ 通常exportの場合は{}で分割代入する。

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceshowflag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceshowflag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceshowflag || setFaceShowFlag(true);
    } else {
      faceshowflag && setFaceShowFlag(false);
    }
    // 1行だけ無効にしたいときはこの書き方ができる。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="bule">heeello</ColorfulMessage>
      <ColorfulMessage color="pink">heeello2</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceshowflag && <p>aaa</p>}
    </>
  );
};

export default App;
