import { createContext, useState } from 'react';
import { ConfigProvider } from 'antd';
import { theme } from 'antd';

export const ThemeContext = createContext();
const lightTheme = {
  colorPrimary: '#1890ff',
  colorBgBase: '#ffffff',
  colorTextBase: '#000000',
};

const darkTheme = {
  colorPrimary: '#722ed1',
  colorBgBase: '#141414',
  colorTextBase: '#ffffff',
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (checked) => setIsDark(checked);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorihm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: isDark ? darkTheme : lightTheme,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
