import './App.css';
import Tabs from './components/Tabs';
import { TabProvider } from './context/TabProvider';

function App() {
  return (
    <TabProvider>
      <Tabs/>
    </TabProvider>
  );
}

export default App;
