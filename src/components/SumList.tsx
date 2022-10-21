import React, { FC } from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Sum } from './Sum';

interface Obj {
  a: number,
  b: number,
}

interface Props {
  numberList: Obj[];
}

export const SumList: FC<Props> = (props) => {
  const { numberList } = props;

  return (
    <div>
      {numberList.map(({ a, b }) => (
        <Sum key={1} a={a} b={b} />
      ))}
    </div>
  );
};
