import todosReducer from './todosSlice';

test('Toogle a todo based on id', () => {
  const initialState = { entities: { 0: { text: 'Test text', completed: false } }};
  
  const action = { type: 'todos/todoToggled', payload: 0 };
  const result = todosReducer(initialState, action);

  expect(result.entities[0].completed).toBeTruthy();
})