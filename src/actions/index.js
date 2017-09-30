export const SET_CATEGORIES = 'SET_CATEGORIES';
export const PICK_CATEGORY = 'PICK_CATEGORY';

export function setCategories(categories) {
  console.log(`src/actions, The action creator, setCategories, will return ${categories.length} categories to all reducers, using the action type, SET_CATEGORIES.`);

  return {
    type: SET_CATEGORIES,
    categories
  }
}

export function pickCategory(category) {
  return {
    type: PICK_CATEGORY,
    category
  }
}
