# React Component Registry

I wonder how shandcn component can be installed via cli like `npx shadcn@latest add menubar`, then I found this...

Reference: https://ui.shadcn.com/docs/registry/getting-started

## Development

This project can be run with `bun` or `npm`.

```bash
npm run dev
```

## Build Registry

```bash
npm run registry:build

# or

npm run reg
```

## Access registry

```txt
http://localhost:3400/r/<component-name>.json
```

## Install a component from registry

```bash
npx shadcn@latest add <url>

# or

bunx --bun shadcn@latest add <url>
```
