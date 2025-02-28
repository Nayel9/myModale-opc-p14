import * as React from "react";
import "./modale.css";

interface ModaleProps {
    title: string;
    content: string;
    onClose: () => void;
    error?: boolean;
    ariaLabel?: string;
    children?: React.ReactNode;
}

export function Modale({title, content, onClose, error, ariaLabel, children}: ModaleProps) {
    return (
        <div className="modale">
            <div className={`modale-content ${error ? "modale-content-error" : ""}`}>
                <div>
                    {/* Render the title of the modal */}
                    <h2 className={`modale-title ${error ? "modale-title-error" : ""}`}>
                        {title}
                    </h2>
                    {/* Render the content of the modal */}
                    <p className={`modale-text ${error ? "modale-text-error" : ""}`}>
                        {content}
                    </p>
                </div>
                <div className="modale-actions">
                    {/* Render the children elements (buttons) */}
                    {children}

                    {/* Render the close button */}
                    <button
                        className={`modale__button ${error ? "modale__button-error" : ""}`}
                        onClick={onClose}
                        aria-label={ariaLabel}
                        data-testid="modaleCloseButton"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}