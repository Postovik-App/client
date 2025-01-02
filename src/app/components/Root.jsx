import { StrictMode } from "react";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

export default function Root() {
    return (
        <StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StrictMode>
    );
}