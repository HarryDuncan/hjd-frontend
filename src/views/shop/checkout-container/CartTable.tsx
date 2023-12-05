import { CartItem, useShopContext } from "../shop-context/shop.context";

const CartTable = () => {
  const {
    state: { cart },
  } = useShopContext();

  const handleRemoveItem = (productId: number) => {
    // onRemoveItem(productId);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.title}</td>
              <td>{cartItem.quantity}</td>
              <td>{cartItem.product.price}</td>
              <td>
                <button onClick={() => handleRemoveItem(cartItem.product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
