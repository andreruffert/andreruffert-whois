import pkg from '../package.json' with { type: 'json' };

const intro = `André Ruffert (v${pkg.version})`;
const seperator = '-'.repeat(intro.length);

export const output = `
${intro}
${seperator}
Web           https://andreruffert.com
GitHub        https://github.com/andreruffert
CodePen       https://codepen.io/andreruffert
Bluesky       https://bsky.app/profile/andreruffert.com
Product Hunt  https://www.producthunt.com/@andreruffert
LinkedIn      https://linkedin.com/in/andreruffert

Have a great day!

`;

export default function () {
  console.log(output);
  return output;
}
