import { Input } from "@/components/Input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export const InputDemo = ({ starterText = "" }) => {
  const [input, setInput] = useState({ textInput: starterText, warning: true });
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput({ ...input, textInput: event.currentTarget.value });
  };
  useEffect(() => {
    if (input.textInput !== "") {
      setInput({ ...input, warning: false });
    } else {
      setInput({ ...input, warning: true });
    }
  }, [input]);

  return (
    <Input
      value={input.textInput}
      onChange={handleOnChange}
      placeholder="My placeholder text"
      className={cn(
        input.warning && "bg-red-300 border-red-400 placeholder-red-600"
      )}
    />
  );
};
