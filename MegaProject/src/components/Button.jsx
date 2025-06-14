import React from "react";

export default function Button({
  Children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button className={`px-4 ${bgColor} ${textColor} py-2 rounded-lg ${className}`} {...props} >{Children}</button>
  );
}
