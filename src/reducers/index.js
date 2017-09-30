import { SET_CATEGORIES } from '../actions';

function categories(state = [], action) {
  console.log('The current state is:', state);
  if(action.type === SET_CATEGORIES) {
    console.log(`The categories reducer has received the action type, SET_CATEGORIES.`);
  }

  switch(action.type) {
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

export default categories;
