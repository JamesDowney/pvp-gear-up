# pvp-gear-up

My groovy new script for KoLmafia

# Development

First turn your TypeScript files into something KoLmafia can understand by running

```bash
yarn run build
```

Then you can automatically create symlinks to your built files by running

```bash
yarn run install-mafia
```

When you're developing you can have your files automatically rebuild by keeping

```bash
yarn run watch
```

running in the background. If you've already built symlinks, your up-to-date script can be run instantly by entering `pvp-gear-up` into the KoLmafia CLI.
