import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MyappViewProps } from './Myapp.types';

const NativeView: React.ComponentType<MyappViewProps> =
  requireNativeViewManager('Myapp');

export default function MyappView(props: MyappViewProps) {
  return <NativeView {...props} />;
}
