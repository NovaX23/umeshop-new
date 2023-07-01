import data from "./data";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App () {
  return (
    <BrowserRouter>
      <div >
        <header>
          <a href="/">Umeshop</a>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen></ProductScreen>}></Route>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
