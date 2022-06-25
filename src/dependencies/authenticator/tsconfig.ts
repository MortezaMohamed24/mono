{
  "display": "Node 12",
  
  "include": [
    "./*", 
    "./*/*", 
    "./*/*/*", 
    "./*/*/*/*", 
    "./*/*/*/*/*", 
    "./*/*/*/*/*/*", 
    "./*/*/*/*/*/*/*", 
    "./*/*/*/*/*/*/*/*", 
    "./*/*/*/*/*/*/*/*/*", 
  ],

  "compilerOptions": {
    "lib": ["es2022"],
    "strict": true,
    "module": "ES2020",
    "target": "es2019",
    "baseUrl": ".",
    "outDir": "dist",
    "allowJs": true,
    "sourceMap": true,
    "skipLibCheck": true,
    "alwaysStrict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "strictNullChecks": true,
    "moduleResolution": "node",
    "exactOptionalPropertyTypes": true,
    "forceConsistentCasingInFileNames": true,
  },
}