# @boobareth/react-native-ui

Common UI for boobar.eth projects

## Installation

```sh
npm install @boobareth/react-native-ui
```

## Usage

```js
import { multiply } from "@boobareth/react-native-ui";

// ...

const result = await multiply(3, 7);
```

# Storybook

## addons

### addon-actions

> Capture actions

- Deps

```s
@storybook/addon-actions
@storybook/addon-ondevice-actions
```

- Setup

```ts
import "@storybook/addon-ondevice-actions/register";
```

- Use

```ts
import { action } from "@storybook/addon-actions";
onPress={action("Basic pressed")}
```
