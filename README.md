# React Native Lifecycle

[![Latest Version on NPM](https://img.shields.io/npm/v/react-native-lifecycle.svg?style=flat-square)](https://npmjs.com/package/react-native-lifecycle)
[![npm](https://img.shields.io/npm/dt/react-native-lifecycle.svg?style=flat-square)](https://www.npmjs.com/package/react-native-lifecycle)

[简体中文](./README.zh-CN.md)

### Install

```sh
yarn add react-native-lifecycle
```

### Peer Dependencies

```sh
yarn add @react-navigation/native # >= 5.7.0 or >= 6.0.0
```

### Support

| package name           | version | react-native version |
| ---------------------- | ------- | -------------------- |
| react-native-lifecycle | 2.0.0+  | 0.65.0+              |
| react-native-lifecycle | 1.2.4+  | 0.59.0+              |

### Usage

[Example](https://github.com/Chooin/react-native-lifecycle-example)

##### Global Hooks

```js
import { index, index } from 'react-native-lifecycle';

export default function App() {
  // Called when the application from background to foreground
  index(() => {});

  // Called when the application from foreground to background
  index(() => {});
}
```

##### Page/Screen Hooks

```js
import {
  index,
  useShow,
  useHide,
  index,
  useResize,
} from 'react-native-lifecycle';

export default function Page() {
  // Called when the component is mounted
  index(() => {});

  // Called when the page is displayed or in the application from background to foreground
  useShow(() => {});

  // Called when the page is hidden or in the application from foreground to background
  useHide(() => {});

  // Called when the component is unmounted
  index(() => {});

  // Called after the page window resize
  useResize(() => {});
}
```
