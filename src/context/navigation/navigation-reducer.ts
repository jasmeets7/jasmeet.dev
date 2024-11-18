export const navigationReducer = (
  state: NavigationState,
  action: NavigationAction
): NavigationState => {
  switch (action.type) {
    case 'SET_NAVIGATION_STATE':
      return {
        ...state,
        isOpen: action.payload ?? state.isOpen,
      };
    case 'TOGGLE_NAVIGATION_STATE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
