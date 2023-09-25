import * as React from 'react';

import { MyappViewProps } from './Myapp.types';

export default function MyappView(props: MyappViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
