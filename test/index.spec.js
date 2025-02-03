import { strictEqual } from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import andreruffert, { output as expectedOutput } from '../src/index.js';

describe('Output tests', () => {
  it('should pass CLI equality test', () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const cliPath = join(__dirname, '../src/cli.js');
    const cli = spawnSync('node', [cliPath], { encoding: 'utf8' });
    const actualOutput = `${cli.stdout}`;
    strictEqual(actualOutput, expectedOutput, 'Output should be equal');
  });

  it('should pass programmatic equality test', () => {
    const actualOutput = andreruffert();
    strictEqual(actualOutput, expectedOutput, 'Output should be equal');
  });
});
