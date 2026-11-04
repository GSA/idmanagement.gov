export function formatAuthorityName(label) {
  return label.replace(/^DOD\b/, 'DoD')
    .replace(/^DoD (EMAIL|DERILITY)\b/, (_, category) =>
      `DoD ${category === 'EMAIL' ? 'Email' : 'Derility'}`);
}

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
