type SelectProps = {
  title: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
};

export function SelectFilter({ title, options, value, onChange }: SelectProps) {
  return (
    <div>
      <label className="block text-sm sm:text-base font-semibold mb-2 text-zinc-700 dark:text-zinc-100">
        {title}
      </label>
      <select
        className="w-full p-2 text-sm sm:text-base rounded border dark:bg-zinc-800 dark:border-zinc-600"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Todos</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
