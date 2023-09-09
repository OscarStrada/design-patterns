import Toggle from './Toggle';
import List from './List';
import ThemeProvider from './context/ThemeProvider';


function App() {
  return (
    <ThemeProvider>
      <Toggle />
      <List />
    </ThemeProvider>
  )
}

export default App
