import React from "react";

/**
 * 通常のexportは変数前に指定する。
 *　importのときに{}で分割代入が必要だが、変数名が一致していないとエラーとなるのでこちらのほうが
 *  変数名の間違いに気づきやすい。
 */
export const ColorfulMessage = (props) => {
  //console.log("ColorfulMessage()");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
/**
 * export deafultは、1ファイルに1つしか指定できない。
 * また、importのときにすきな変数名を指定できる。
 */
