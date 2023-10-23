import { Input } from "@/components/Input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export const InputDemo = ({ starterText = "" }) => {
  const [input, setInput] = useState(starterText);
  const warning = input === "" ? true : false;
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <Input
      value={input}
      onChange={handleOnChange}
      placeholder="My placeholder text"
      className={cn(warning && "bg-red-300 border-red-400 placeholder-red-600")}
    />
  );
};
