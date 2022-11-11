import { InputHTMLAttributes } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

export function Search({ onClick, ...rest }: SearchProps) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="rounded-l-md h-10 px-2 py-2 text-sm"
        {...rest}
      />

      <button onClick={onClick} className="bg-zinc-900 h-10 px-4 rounded-r-md">
        <MagnifyingGlass size={20} color="white" />
      </button>
    </div>
  );
}
