import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'theme';

function getInitialTheme() {
	if (!browser) return 'light';

	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'dark' || stored === 'light') return stored;

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const theme = writable(getInitialTheme());

/** @param {'light' | 'dark'} value */
export function applyTheme(value) {
	if (!browser) return;

	document.documentElement.setAttribute('data-theme', value);
	localStorage.setItem(STORAGE_KEY, value);
	theme.set(value);
}

export function initTheme() {
	if (!browser) return;
	applyTheme(getInitialTheme());
}
