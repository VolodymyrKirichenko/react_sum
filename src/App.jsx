import React from 'react';
import './App.scss';
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

export const App = () => (
  <div className="container container__wrapper">
    <div className="container__calculator">
      <SumList numberList={numberList} />
    </div>
  </div>
);
