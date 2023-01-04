import {createContext, useContext} from 'react';

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

type IThemeContext = {};
