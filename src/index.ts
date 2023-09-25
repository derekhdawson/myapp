import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Myapp.web.ts
// and on native platforms to Myapp.ts
import MyappModule from './MyappModule';
import MyappView from './MyappView';
import { ChangeEventPayload, MyappViewProps } from './Myapp.types';

// Get the native constant value.
export const PI = MyappModule.PI;

export function hello(): string {
  return MyappModule.hello();
}

export async function setValueAsync(value: string) {
  return await MyappModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyappModule ?? NativeModulesProxy.Myapp);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MyappView, MyappViewProps, ChangeEventPayload };
