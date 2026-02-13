"use client";

import type { ProductFilterOptions, ProductFilterState } from "@/types/industrial";

type FilterSidebarProps = {
  filters: ProductFilterState;
  options: ProductFilterOptions;
  onChange: (next: ProductFilterState) => void;
  onReset: () => void;
};

function SelectField({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    // Shared select field keeps filter control behavior and spacing consistent.
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-zinc-400">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="form-input mt-2 text-sm"
      >
        <option value="all">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function FilterSidebar({ filters, options, onChange, onReset }: FilterSidebarProps) {
  return (
    // Sticky sidebar lets buyers adjust filters while scanning products.
    <aside className="sticky top-24 rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#191c1f,#111315)] p-5">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-200">Filter Products</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-400 hover:text-zinc-200"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-zinc-400">Search</span>
          <input
            type="search"
            value={filters.query}
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
            className="form-input mt-2 text-sm"
            placeholder="Code, product, application"
          />
        </label>

        <SelectField
          label="Standard"
          value={filters.standard}
          options={options.standards}
          onChange={(standard) => onChange({ ...filters, standard })}
        />

        <SelectField
          label="Application"
          value={filters.application}
          options={options.applications}
          onChange={(application) => onChange({ ...filters, application })}
        />

        <SelectField
          label="Industry"
          value={filters.industry}
          options={options.industries}
          onChange={(industry) => onChange({ ...filters, industry })}
        />

        <SelectField
          label="Tensile Strength"
          value={filters.tensileStrength}
          options={options.tensileStrengths}
          onChange={(tensileStrength) => onChange({ ...filters, tensileStrength })}
        />
      </div>
    </aside>
  );
}
