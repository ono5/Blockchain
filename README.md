# Blockchain

## Install

```
npx create-next-app nft-marketplace --typescript
```

## Start

```
npm run dev
```

## Tailwind

[install](https://tailwindcss.com/docs/guides/nextjs)

```
npm install -D tailwindcss postcss autoprefixer
npm install @tailwindcss/forms
npm i tailwind-config-viewer -D
npx tailwindcss init -p
```

```
"scripts": {
    "tailwind-config-viewer": "tailwind-config-viewer -o"
}
```

[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Headless UI
[Page](https://headlessui.dev/)

## Heroicons
[Page](https://heroicons.com/)

```
npm install @headlessui/react @heroicons/react
```

## Set Path

tfconfig.json

```
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@ui": ["components/ui"],
      "@ui/*": ["components/ui/*"],
      "@_types/*": ["types/*"],
    }
  }
```

ex. import exsample.

```
import { NftMeta } from '@_types/nft'
```
