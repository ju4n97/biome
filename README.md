# @jm/biome

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ju4n97/biome/ci.yaml?style=flat&colorA=000000)
[![JSR](https://jsr.io/badges/@jm/biome)](https://jsr.io/@jm/biome) [![JSR Score](https://jsr.io/badges/@jm/biome/score)](https://jsr.io/@jm/biome)

Reusable configuration for [Biome](https://github.com/biomejs/biome).

## Installation

With Deno

```sh
deno add @jm/biome
```

With Bun

```sh
bunx jsr add @jm/biome
```

With npm

```sh
npx jsr add @jm/biome
```

With Yarn

```sh
yarn dlx jsr add @jm/biome
```

With pnpm

```sh
pnpm dlx jsr add @jm/biome
```

## Usage

1. Create a `biome.json` or `biome.jsonc` file in the root of your project.

    ```sh
    touch biome.json # or biome.jsonc
    ```

2. Extend the `biome.json` or `biome.jsonc` file:

    ```jsonc
    {
        "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
        "extends": "@jm/biome",
        // ...
    }

3. Override any [default configuration](https://github.com/ju4n97/biome/blob/master/biome.json) to suit your needs. Refer to the [Biome documentation](https://biomejs.dev/guides/getting-started) for more information.

## IDE Support

- [VS Code](https://biomejs.dev/guides/editors/first-party-plugins/#vs-code)
- [IntelliJ](https://biomejs.dev/guides/editors/first-party-plugins/#intellij)
- [Zed](https://biomejs.dev/guides/editors/first-party-plugins/#zed)
- [Neovim](https://github.com/neovim/nvim-lspconfig/blob/master/lua/lspconfig/server_configurations/biome.lua)

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](../../LICENSE)
