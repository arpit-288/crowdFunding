import React from "react";


export function Button({title,onClickHandler}) {

  return (
    <button className="border-none border-r-10 bg-black text-white p-2" onClick={onClickHandler}>{title}</button>
  );
}