import React from 'react'
import Coin from './coin/Coin';
import Counter from './counter/Counter';
import ThemeColor from './theme/themeColor';

const CounterContainer = () => {
  return (
    <div>
         <Counter/>
         <Coin/>
         <ThemeColor/>
    </div>
  )
}

export default CounterContainer;
