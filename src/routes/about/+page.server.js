import { about } from '$lib/data/about';
import { technicalFocus } from '$lib/data/technicalFocus';
import { experience, currentRole, earlierBackground } from '$lib/data/experience';
import { education } from '$lib/data/education';
import { interests } from '$lib/data/interests';

export function load() {
	return {
		about,
		technicalFocus,
		experience,
		currentRole,
		earlierBackground,
		education,
		interests
	};
}
