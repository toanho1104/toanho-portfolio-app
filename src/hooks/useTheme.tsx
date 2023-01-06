import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import React from 'react';

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IThemProvider {
  children: React.ReactNode;
}
type TThemeMode = 'dark' | 'light';

type TColor = {
  PRIMARY_DARK?: string;
  PRIMARY?: string;
  PRIMARY_LIGHT?: string;

  LINEAR?: [string];

  WARNING?: string;
  ERROR?: string;
  SUCCESS?: string;

  BORDER_LIGHT?: string;
  BORDER?: string;
  BORDER_DARK?: string;

  ICON?: string;
  ICON_LIGHT?: string;
  ICON_ON_PRIMARY?: string;

  TEXT_LIGHT?: string;
  TEXT_DARK?: string;

  TEXT_ON_BACKGROUND?: string;
  TEXT_ON_CARD?: string;
  TEXT_ON_PRIMARY?: string;
  TEXT_ON_WARNING?: string;
  TEXT_ON_ERROR?: string;
  TEXT_ON_SUCCESS?: string;

  BACKGROUND_PRIMARY?: string;
  BACKGROUND_SECONDARY?: string;
  BACKGROUND_BOTTOM_TAB_BAR?: string;

  CARD_PRIMARY?: string;
  CARD_SECONDERS?: string;
};

type IThemeContext = {
  themeMode: 'dark' | 'light';
  setThemeMode: Dispatch<SetStateAction<TThemeMode>>;
  colors: TColor;
};

const LightTheme: TColor = {
  PRIMARY: '#052df5',
  PRIMARY_DARK: '#111111',
  BACKGROUND_PRIMARY: '#f7f5f5',
  BACKGROUND_SECONDARY: '#ffff',
  TEXT_DARK: '#020a07',
};
const DarkTheme: TColor = {
  PRIMARY: '#7c91fc',
  PRIMARY_DARK: '#111111',
  BACKGROUND_PRIMARY: '#111111',
  BACKGROUND_SECONDARY: '#363837',

  TEXT_DARK: '#ffff',
};

export const useTheme = () => {
  const ThemeContextProvider = ({children}: IThemProvider) => {
    const [themeMode, setThemeMode] = useState<TThemeMode>('light');

    const value: IThemeContext = {
      themeMode: themeMode,
      setThemeMode: setThemeMode,
      colors: themeMode === 'light' ? LightTheme : DarkTheme,
    };

    return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
  };

  const {colors, themeMode, setThemeMode} = useContext(ThemeContext);

  return {ThemeContextProvider, colors, themeMode, setThemeMode};
};
