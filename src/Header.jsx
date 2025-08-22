import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Switch } from 'antd';

const Test2 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return <Switch onChange={toggleTheme} checked={theme === 'dark'} />;
};

export default Test2;
