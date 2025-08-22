import './App.css';
import ThemeProvider from './ThemeContext';

import Maket from './Maket';

function App() {
  return (
    <>
      <ThemeProvider>
        <Maket />
      </ThemeProvider>
    </>
  );
}

export default App;
