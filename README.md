# `prettier-plugin-pretext`

`prettier-plugin-pretext` is a [prettier](https://prettier.io/) plugin for PreTeXt XML dialect. `prettier` is an opinionated code formatter that supports multiple languages and integrates with most editors. The idea is to eliminate discussions of style in code review and allow developers to get back to thinking about code design instead. It is based off of `@prettier/plugin-xml`.

## Getting started

To run `prettier` with the XML plugin, you're going to need [`node`](https://nodejs.org/en/download/).

If you're using the `npm` CLI, then add the plugin by:

```bash
npm install --save-dev prettier @prettier/plugin-xml
```

Or if you're using `yarn`, then add the plugin by:

```bash
yarn add --dev prettier @prettier/plugin-xml
```

The `prettier` executable is now installed and ready for use:

```bash
./node_modules/.bin/prettier --write '**/*.xml'
```

## Configuration

Below are the options (from [`src/plugin.ts`](src/plugin.ts)) that `@prettier/plugin-xml` currently supports:

| API Option                 | CLI Option                     |  Default   | Description                                                                                                   |
| -------------------------- | ------------------------------ | :--------: | ------------------------------------------------------------------------------------------------------------- |
| `bracketSameLine`          | `--bracket-same-line`          |   `true`   | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#bracket-same-line))         |
| `printWidth`               | `--print-width`                |    `80`    | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#print-width)).              |
| `singleAttributePerLine`   | `--single-attribute-per-line`  |  `false`   | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#single-attribute-per-line)) |
| `tabWidth`                 | `--tab-width`                  |    `4`     | Same as in Prettier ([see prettier docs](https://prettier.io/docs/en/options.html#tab-width)).                |
| `xmlSelfClosingSpace`      | `--xml-self-closing-space`     |   `true`   | Adds a space before self-closing tags.                                                                        |
| `xmlWhitespaceSensitivity` | `--xml-whitespace-sensitivity` | `"strict"` | Options are `"strict"` and `"ignore"`. You may want `"ignore"`, [see below](#whitespace).                     |

Any of these can be added to your existing [prettier configuration
file](https://prettier.io/docs/en/configuration.html). For example:

```json
{
    "tabWidth": 4
}
```

Or, they can be passed to `prettier` as arguments:

```bash
prettier --tab-width 4 --write '**/*.xml'
```

### Whitespace

In XML, by default, all whitespace inside elements has semantic meaning. For prettier to maintain its contract of not changing the semantic meaning of your program, this means the default for `xmlWhitespaceSensitivity` is `"strict"`. When running in this mode, prettier's ability to rearrange your markup is somewhat limited, as it has to maintain the exact amount of whitespace that you input within elements.

If you're sure that the XML files that you're formatting do not require whitespace sensitivity, you can use the `"ignore"` option, as this will produce a standardized amount of whitespace. This will fix any indentation issues, and collapse excess blank lines (max of 1 blank line). For most folks most of the time, this is probably the option that you want.

### Ignore ranges

You can use two special comments to get prettier to ignore formatting a specific piece of the document, as in the following example:

```xml
<foo>
  <!-- prettier-ignore-start -->
    <this-content-will-not-be-formatted     />
  <!-- prettier-ignore-end -->
</foo>
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/prettier/plugin-xml.

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
