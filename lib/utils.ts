import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Suppress hydration warnings caused by browser extensions
export function suppressBrowserExtensionWarnings() {
    if (typeof window !== 'undefined') {
        const originalError = console.error;
        console.error = (...args) => {
            if (typeof args[0] === 'string' && args[0].includes('Hydration failed')) {
                return;
            }
            originalError.apply(console, args);
        };
    }
}
