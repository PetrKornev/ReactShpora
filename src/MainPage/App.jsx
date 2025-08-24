import './App.css';
import ThemeProvider from '../Context/ThemeContext';

import Maket from '../Maket';

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
