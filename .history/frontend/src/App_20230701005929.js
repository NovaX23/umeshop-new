import data from "./data";


function App () {
  return (
    <div >
      <header>
        <a href="/">Umeshop</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {
          data.products.map(product => (
            <div>
              <img src={product.image} alt={product.name}></img>
            </div>
          ))
        }
      </main>
    </div>
  );
}

export default App;
