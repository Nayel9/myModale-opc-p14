import * as React from "react";

interface CustomSelectProps {
    name: string;
    id: string;
    required: boolean;
    options: { value: string; label: string }[];
    defaultOption: string;
}

export function CustomSelect({name, id, required, options, defaultOption}: CustomSelectProps) {
    return (
        <select name={name} id={id} required={required}>
            <option value="">{defaultOption}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}


