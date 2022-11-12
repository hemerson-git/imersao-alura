import { InputHTMLAttributes } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { useTheme } from "../../hooks/useTheme";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

export function Search({ onClick, ...rest }: SearchProps) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="rounded-l-md h-10 px-2 py-2 text-sm"
        {...rest}
      />

      <button
        onClick={onClick}
        className={`${
          theme === "DARK" ? "bg-zinc-900" : "bg-gray-200"
        } h-10 px-4 rounded-r-md`}
      >
        <MagnifyingGlass
          size={20}
          weight="bold"
          color={`${theme === "DARK" ? "white" : "black"}`}
        />
      </button>
    </div>
  );
}
