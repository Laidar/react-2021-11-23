import counter from '../hocs/counter';

function Product({ product, amount, decrement, increment }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <button onClick={decrement}>-</button>
      {amount}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default counter(Product);
