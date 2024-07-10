import Home from "./Components/Home/Home";
import { MyDataProvider } from "./Context/Provider";

function App() {
  return (
    <MyDataProvider>
    <Home></Home>
    </MyDataProvider>
  );
}

export default App
