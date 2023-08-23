import { img_cdn_path } from "../confiq";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";
import { BiCheckboxSquare, BiCaretUpSquare } from "react-icons/bi";
import emptyCart from "../img/emptycart.png";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const price = [];

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const deleteCartItem = (id) => {
    dispatch(removeItems(id));
  };

  return cartItem.length === 0 ? (
    <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-8 px-6 flex justify-center items-center flex-col">
      <img className="w-[500px] bg-center" src={emptyCart}></img>
      <h1 className="mt-4 text-slate-400">Good food is always cooking!</h1>
      <h1 className="text-slate-400 text-center">
        Go ahead, order some yummy items from the menu.
      </h1>
    </div>
  ) : (
    <>
      <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-8 sm:px-6">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl md:text-3xl font-fsans text-gray-600 underline underline-offset-4">
            Total Cart Items : {cartItem.length}
          </h1>
          <button
            className="bg-[#60b246] p-2 mr-6 text-slate-50 text-sm md:text-lg font-fsans font-semibold rounded-sm hover:shadow-md"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-7">
          <div
            data-testid="cartBox"
            className="p-2 sm:p-8 mt-2 col-span-4 xl:col-span-5"
          >
            {cartItem.map((item) => {
              return <CartItems item={item} />;
            })}
          </div>
          {cartItem.length === 0 ? null : (
            <div className="px-5 lg:px-10 py-4 my-10 col-span-7  md:col-span-3  border-l rounded-md">
              <h2 className="text-2xl font-sans font-bold mb-4 text-slate-700">
                {" "}
                Cart :{" "}
                <span className="text-green-500 font-semibold">
                  {cartItem.length} Items
                </span>
              </h2>
              {cartItem.map((item) => {
                return (
                  <>
                    <div
                      className="grid grid-flow-col gap-1 lg:gap-2 grid-cols-5 px-1 mb-2 tracking-wide text-gray-600"
                      key={item.id}
                    >
                      <h2 className="line-clamp-1 col-span-4">{item?.name}</h2>
                      <h2 className="col-span-1">
                        ₹ {item?.price / 100 ? item?.price / 100 : "402"}
                      </h2>
                    </div>
                    <h5 className="hidden">
                      {price.push(item?.price / 100 ? item?.price / 100 : 402)}
                    </h5>
                  </>
                );
              })}
              <div className="flex justify-between border-t-[1px] mt-2 py-2 text-lg font-semibold text-slate-700">
                <h2>SubTotal</h2>
                <h2>
                  ₹{" "}
                  {price
                    .reduce((partialSum, a) => partialSum + a, 0)
                    .toFixed(2)}
                </h2>
              </div>

              <button className="bg-[#60b246] py-2 px-4 my-3 text-white font-bold tracking-wider font-fsans w-full hover:shadow-md">
                CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
