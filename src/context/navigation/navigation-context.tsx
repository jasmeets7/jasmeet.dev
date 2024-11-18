'use client';

import { createContext, useReducer, ReactNode } from 'react';
import { navigationReducer } from './navigation-reducer';

const navigationContextInitialValue: NavigationContextProps = {
  isOpen: false,
  toggleNavigationState: () => {
    /** no op **/
  },
  setNavigationState: () => {
    /** no op **/
  },
};

export const NavigationContext = createContext<NavigationContextProps>(
  navigationContextInitialValue
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(navigationReducer, {
    isOpen: false,
  });

  const setNavigationState = (isOpen: boolean) => {
    dispatch({
      type: 'SET_NAVIGATION_STATE',
      payload: isOpen,
    });
  };

  const toggleNavigationState = () => {
    dispatch({
      type: 'TOGGLE_NAVIGATION_STATE',
    });
  };

  const ctxValue: NavigationContextProps = {
    setNavigationState,
    toggleNavigationState,
    isOpen: state.isOpen,
  };

  return (
    <NavigationContext.Provider value={ctxValue}>
      {children}
    </NavigationContext.Provider>
  );
};
