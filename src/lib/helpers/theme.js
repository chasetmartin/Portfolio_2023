import { writable } from "svelte/store";

export const theme = writable(getInitialTheme());

function getInitialTheme() {
  if (typeof window !== "undefined") {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkMode ? "dark" : "light";
  } else {
    // Return light theme if running in a non-browser environment
    return "light";
  }
}
