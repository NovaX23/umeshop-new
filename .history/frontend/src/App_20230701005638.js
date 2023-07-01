import data from "./data";


function App () {
  return (
    <div >
      <header>
        <a href="/">Umeshop</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.name}
      </main>
    </div>
  );
}

export default App;
