"use client";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: IButton) => {
  return (
    <button
      {...props}
      className="
        py-2 px-4 rounded 
        bg-red-500 hover:bg-red-600 
        active:bg-red-700 focus:outline-none focus:ringfocus:ring-red-300 
        ease-in-out duration-300 
        disabled:bg-slate-500 disabled:hover:bg-slate-500 disabled:text-slate-950 disabled:opacity-30"
    ></button>
  );
};
