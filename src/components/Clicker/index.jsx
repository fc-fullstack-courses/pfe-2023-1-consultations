import React, { useReducer } from 'react';

/*
  * зробити компонент Counter (лічільник) на хуці useReducer
    цей компонент має містити кнопку, при натисканні на яку змінюється лічильник
    селект, який вказує крок зміни
    ** кнопка яка керує тим чи буде крок додаватися або відніматися від лічильника
    ************ має бути кнопка, яка скине стан в початкове значення
*/

const initialState = {
  counterValue: 0,
  step: 1,
  isAdditionMode: true,
};

function counterReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COUNT': {
      const { counterValue, step, isAdditionMode } = state;

      const newCounterValue = isAdditionMode ? counterValue + step : counterValue - step;

      const newState = {
        ...state,
        counterValue: newCounterValue,
      };

      return newState;
    }
    case 'CHANGE_STEP': {
      return {
        ...state,
        step: action.payload,
      };
    }
    case 'CHANGE_MODE' : {
      return {
        ...state,
        isAdditionMode: !state.isAdditionMode
      }
    }
    case 'RESET' : {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}

const Clicker = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleClick = () => {
    const action = { type: 'CHANGE_COUNT' };
    dispatch(action);
  };

  const changeStep = (e) => {
    const action = { type: 'CHANGE_STEP', payload: +e.target.value };
    dispatch(action);
  };

  const handleChangeMode = () => {
    const action = { type: 'CHANGE_MODE' };
    dispatch(action);
  }

  const handleReset = () => {
    const action = {type: 'RESET'};
    dispatch(action);
  }

  return (
    <div>
      <p>Counter value is {state.counterValue}</p>
      <button onClick={handleClick}>Change Counter</button>
      <button onClick={handleChangeMode}>Change direction</button>
      <button onClick={handleReset}>Reset</button>
      <label>
        Step is:
        <select value={state.step} onChange={changeStep}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </label>
    </div>
  );
};

export default Clicker;
