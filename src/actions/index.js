export const SET_CATEGORIES = 'SET_CATEGORIES';

export function setCategories(categories) {
  console.log(`src/actions, The action creator, setCategories, will return ${categories.length} categories to all reducers, using the action type, SET_CATEGORIES.`);

  return {
    type: SET_CATEGORIES,
    categories
  }
}
