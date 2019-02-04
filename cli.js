#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const boxen = require('boxen');
const terminalLink = require('terminal-link');
const pkg = require('./package.json');

const cli = meow(`
  Usage:
    $ ${pkg.name}

  Options:
    --help      Show information
    --version   Show current version

  Example:
    $ ${pkg.name}
`);

const output = chalk`
{magentaBright.bold.underline ${pkg.author.name}}

{bold Passionate Front-end Web Developer}
{dim.italic Currently based in Berlin, Germany}

Heya, my name is André Ruffert. I'm a self-taught,
autodidact Software Developer passionate about JavaScript,
Cutting-Edge, Web Standards, Best Practice and Open Source.

I love to make really fucking cool shit. Make the web awesome.

{underline ${terminalLink('andreruffert.com', 'https://andreruffert.com')}}

{dim.italic I write the JavaScript you are running. Have a nice day!}

{bgBlack  npx andreruffert }
`;

console.log(boxen(output, {
  padding: 1,
  margin: 1,
  borderColor: 'magenta',
  borderStyle: 'round',
  align: 'center'
}));
