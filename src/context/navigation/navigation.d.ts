const NAVIGATION_ACTION_TYPES = {
  SET_NAVIGATION_STATE: 'SET_NAVIGATION_STATE',
  TOGGLE_NAVIGATION_STATE: 'TOGGLE_NAVIGATION_STATE',
} as const;

type NAVIGATION_ACTION_TYPES =
  (typeof NAVIGATION_ACTION_TYPES)[keyof typeof NAVIGATION_ACTION_TYPES];

interface NavigationState {
  isOpen: boolean;
}

type NavigationAction = {
  type: NAVIGATION_ACTION_TYPES;
  payload?: boolean;
};

interface NavigationContextProps extends NavigationState {
  setNavigationState: (isOpen: boolean) => void;
  toggleNavigationState: () => void;
}
