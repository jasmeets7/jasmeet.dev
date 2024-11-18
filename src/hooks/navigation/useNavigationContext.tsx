import { NavigationContext } from '@portfolio/context/navigation';
import { useContext } from 'react';

export const useNavigationContext = (): NavigationContextProps => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      'useNavigationContext must be used within a LoadingProvider'
    );
  }
  return context;
};
