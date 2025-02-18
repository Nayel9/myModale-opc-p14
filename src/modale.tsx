import * as React from "react";
import "./modale.css";

interface ModaleProps {
    title: string;
    content: string;
    onClose: () => void;
    error?: boolean;
    ariaLabel: string;
}

export function Modale({title, content, onClose, error, ariaLabel}: ModaleProps) {
    return (
        <div className="modale">
            <div className={`modale-content ${error ? "modale-content-error" : ""}`}>
                <div>
                    <h2 className={`modale-title ${error ? "modale-title-error" : ""}`}>
                        {title}
                    </h2>
                    <p className={`modale-text ${error ? "modale-text-error" : ""}`}>
                        {content}
                    </p>
                </div>
                <button
                    className={`modale__button ${error ? "modale__button-error" : ""}`}
                    onClick={onClose}
                    aria-label={ariaLabel}
                >
                    Close
                </button>
            </div>
        </div>
    );
}