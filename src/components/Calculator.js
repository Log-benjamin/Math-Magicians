import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    setValue((prevState) => calculate(prevState, buttonName));
  };

  const display = value.total || value.next || '0';

  return (
    <div className="container">
      <h2 className="letsdoMath">Let&apos;s do some Math!</h2>
      <div className="calculator">
        <form>

          <div className="topinp">
            <input className="input-value" type="text" value={display} />
          </div>

          <div className="rowValue">
            <input type="button" className="val" value="AC" onClick={() => handleButtonClick('AC')} />
            <input type="button" className="val" value="+/-" onClick={() => handleButtonClick('+/-')} />
            <input type="button" className="val" value="%" onClick={() => handleButtonClick('%')} />
            <input className="val opp" type="button" value="÷" onClick={() => handleButtonClick('÷')} />
          </div>

          <div className="rowValue">
            <input type="button" className="val" value="7" onClick={() => handleButtonClick('7')} />
            <input type="button" className="val" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" className="val" value="9" onClick={() => handleButtonClick('9')} />
            <input className="val opp" type="button" value="x" onClick={() => handleButtonClick('x')} />
          </div>

          <div className="rowValue">
            <input type="button" className="val" value="4" onClick={() => handleButtonClick('4')} />
            <input type="button" className="val" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" className="val" value="6" onClick={() => handleButtonClick('6')} />
            <input className="val opp" type="button" value="-" onClick={() => handleButtonClick('-')} />
          </div>

          <div className="rowValue">
            <input type="button" className="val" value="1" onClick={() => handleButtonClick('1')} />
            <input type="button" className="val" value="2" onClick={() => handleButtonClick('2')} />
            <input type="button" className="val" value="3" onClick={() => handleButtonClick('3')} />
            <input className="val opp" type="button" value="+" onClick={() => handleButtonClick('+')} />
          </div>

          <div className="rowValue">
            <input className="val zero" type="button" value="0" onClick={() => handleButtonClick('0')} />
            <input type="button" className="val" value="." onClick={() => handleButtonClick('.')} />
            <input className="val opp" type="button" value="=" onClick={() => handleButtonClick('=')} />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Calculator;
