#!/usr/bin/env node

'use strict';

require('child_process').spawn(`npm run ${process.argv.splice(2).join(' ')}`, {
  shell: true,
  stdio: 'inherit',
});
