// @ts-ignore
import React, { FC } from 'react';
import ListItem from '@mui/material/ListItem';

interface Props {
  a: number,
  b: number,
}

export const Sum: FC<Props> = (props) => {
  const { a = 0, b = 0 } = props;

  return (
    <ListItem sx={{ height: 50 }} button>
      <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
    </ListItem>
  );
};
