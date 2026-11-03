// DoD categories follow its published Identity, Email and Software CA directories:
// https://usgovpki.apps.deas.ecs.mil/dod/cas-id/index.html
// https://usgovpki.apps.deas.ecs.mil/dod/cas-email/index.html
// https://usgovpki.apps.deas.ecs.mil/dod/cas-sw/index.html
// Expand the category only; preserve the exact identity and numbered suffix.
export function authorityNaming(officialName) {
  const match = /^DOD (ID|EMAIL|SW) CA-(\d+)$/.exec(officialName);
  const category = match && {ID: 'Identity', EMAIL: 'Email', SW: 'Software'}[match[1]];
  return {officialName,
    displayName: match ? `DoD ${category} CA-${match[2]}` : officialName,
    explanation: match ? `Department of Defense — ${category} Certification Authority ${match[2]}.` : ''};
}

// Wrap labels without fixed per-authority layout rules.
export function wrapLabel(text, max) {
  const lines = [''];
  const words = text.split(/\s+/).flatMap(word => word.length > max ? word.match(new RegExp(`.{1,${Math.max(1, max)}}`, 'g')) : [word]);
  for (const word of words) {
    const last = lines.length - 1;
    if (lines[last] && (lines[last] + ' ' + word).length > max) lines.push(word);
    else lines[last] += (lines[last] ? ' ' : '') + word;
  }
  return lines;
}
