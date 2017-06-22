import { Ambassador } from '../ambassador';
import { ambassadorReducer } from './ambassador.reducer';

describe('Ambassador Reducer', () => {
  it('should add an ambassador to the list', () => {
    const initialState: Ambassador[] = [];

    const ambassadorAction = {
      type: 'ADD_AMBASSADOR',
      payload: <Ambassador>{
        id: 10,
        name: 'Ferko',
        amount: 99,
        age: 42,
        location: 'Popocatepetl',
        fb: true
      }
    };

    const changedState: Ambassador[] = ambassadorReducer(initialState, ambassadorAction);

    expect(initialState.length).toBeLessThan(changedState.length);
  });
});
