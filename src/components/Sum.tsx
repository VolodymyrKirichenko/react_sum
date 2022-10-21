// @ts-ignore
import React, { FC } from 'react';

interface Props {
  a: number,
  b: number,
}

export const Sum: FC<Props> = (props) => {
  const { a = 0, b = 0 } = props;

  return (
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  );
};
