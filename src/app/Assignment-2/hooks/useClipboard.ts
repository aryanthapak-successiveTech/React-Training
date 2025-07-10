import { useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const copy = (textToCopy:string) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const isCopied = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (isCopied) {
      setCopied(true);
      setTimeout(()=>{
        setCopied(false);
      },2000)
    } 
  };

  console.log(copied)

  return { isCopied:copied, copy };
};
