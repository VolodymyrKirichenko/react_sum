import React from 'react';
import './App.scss';
import List from '@mui/material/List';
import { Paper } from '@mui/material';
import { SumList } from './components/SumList.tsx';

const numberList = [{
  a: 2,
  b: 3,
}, {
  a: -5,
  b: 5,
}, {
  a: 10,
  b: 0,
}, {
  a: 0,
  b: 5,
}, {
  a: 1,
  b: 0,
}];

const style = {
  height: '100%',
  width: '100%',
  maxWidth: 360,
  backgroundColor: 'white',
};

export const App = () => (
  <div className="container container__wrapper">
    <div className="container__calculator">
      <Paper elevation={10}>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <SumList numberList={numberList} />
        </List>
      </Paper>
    </div>
  </div>
);
