import React from 'react';
import Operator from './Operations';

function Calculator() {
  const assignValue = (text) => (
    <input type="button" className="val" value={`${text}`} />
  );
  return (
    <div className="container">
      <div className="calculator">
        <form>

          <Operator />

          <div className="rowValue">
            {assignValue('AC')}
            {assignValue('+/-')}
            {assignValue('%')}
            <input className="val opp" type="button" value="÷" />
          </div>

          <div className="rowValue">
            {assignValue('7')}
            {assignValue('8')}
            {assignValue('9')}

            <input className="val opp" type="button" value="x" />
          </div>

          <div className="rowValue">
            {assignValue('4')}
            {assignValue('5')}
            {assignValue('6')}
            <input className="val opp" type="button" value="-" />
          </div>

          <div className="rowValue">
            {assignValue('1')}
            {assignValue('2')}
            {assignValue('3')}
            <input className="val opp" type="button" value="+" />
          </div>

          <div className="rowValue">
            <input className="val zero" type="button" value="0" />
            {assignValue('.')}
            <input className="val opp" type="button" value="=" />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Calculator;
