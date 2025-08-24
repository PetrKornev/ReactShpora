import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { Switch } from 'antd';

const MyHeader = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        checkedChildren="Тёмная"
        unCheckedChildren="Светлая"
      />
    </>
  );
};

export default MyHeader;
