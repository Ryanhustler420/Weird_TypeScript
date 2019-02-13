# Weird_TypeScript
Typescript || Javascript


## Installing TypeScript

> npm -g install typescript

## Compile TypeScript To Javascript

> tsc script.ts

``
Make sure you are in that directory where the script.ts is located
``

## Make TypeScript .config file for all file compilation

``
npm --init
``
> now you can simply run 'tsc' and it will compile all the .ts file for you


## Namespace Vs Modules

| Namespace  | Modules |
| ------------- | ------------- |
| Organize Application with JS Objects  | Organize Application with real Modules  |
| Can be split up over multiple Files  | Can be split up over multiple Files |
| No Module Loader required  | Module Loader required  |
| Dependencies get difficult to manage in bigger Applications  | Explicit Dependency Declaration  |
