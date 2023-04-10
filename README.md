### ts-node with custom paths problem

This repo demonstrates the problem with executing a TypeScript script that imports from custom paths defined in
tsconfig.json.
                                 
```
npm i
npm run ts-script1 # works
npm run ts-script2 # doesn't work, the `paths` aliases are not recognized by ts-node
```

If you can solve this, please make a PR that allows running `npm run ts-script2` with importing from `@alias/lib`.  
