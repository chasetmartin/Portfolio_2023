import { about } from '$lib/data/about';
import { technicalFocus } from '$lib/data/technicalFocus';
import { experience, earlierBackground } from '$lib/data/experience';
import { education } from '$lib/data/education';
import { interests } from '$lib/data/interests';

export function load() {
	return {
		about,
		technicalFocus,
		experience,
		earlierBackground,
		education,
		interests
	};
}
