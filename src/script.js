import esm from 'esm';
require = esm(module);

import tsNode from 'ts-node';

tsNode.register({
  "compilerOptions": {
    "target": "ES2020",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./build",
    "module": "es2020",
    "moduleResolution": "nodenext"
  },
  transpileOnly: true,
  // compilerOptions: {
  //   esModuleInterop: true // add esModuleInterop option
  // },
  loader: {
    ".ts": "esm"
  },
  // ignore: [/node_modules/]
  // experimentalSpecifierResolution: true
});

import { myFunction } from "./ts-module";

myFunction();
