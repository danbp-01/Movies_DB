import React from "react";
import { IPill } from "./types";
import classNames from 'classnames';



const Pill: React.FC<IPill> = ({ genre, colorPill }) => {
   const pillClass = classNames({
      "p-1 rounded": true,
    "text-white text-sm font-medium leading-none my-0": true,
    "bg-blue-500": colorPill ==="blue",
    "bg-yellow-500": colorPill ==="yellow",
    "bg-green-500": colorPill === "green",
    "bg-purple-500": colorPill === "purple",
   });

   return (
      <span className={pillClass}>{genre}</span>
   )
};

export default Pill;