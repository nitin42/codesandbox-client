// @flow
import packageJSON from './package-json';
import prettierRC from './prettierRC';
import sandboxConfig from './sandbox';
import babelrc from './babelrc';
import angularCli from './angular-cli';
import angularJSON from './angular-json';
import tsconfig from './tsconfig';
import babelTranspiler from './babel-transpiler';

const configs = {
  babelrc,
  babelTranspiler,
  packageJSON,
  prettierRC,
  sandboxConfig,
  angularCli,
  angularJSON,
  tsconfig,
};

export default configs;
