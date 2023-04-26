import { about } from "$lib/data/about";
import { skills } from "$lib/data/skills";
import { experience } from "$lib/data/experience";

export function load() {
	return {
		about,
        skills,
        experience
	};
}