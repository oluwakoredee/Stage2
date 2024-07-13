/* eslint-disable no-unused-vars */
import { useState } from "react";
import useLocalStorage from "../hook/use-localstorage";

const Cart = () => {
  const [cart, setCart] = useLocalStorage("tumbi", []);

  const deleteFromCart = (id) => {
    setCart((prevState) => prevState.filter((cartItem) => cartItem.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleChange = (e, id) => {
    const value = parseInt(e.target.value, 10);
    if (value <= 0) {
      deleteFromCart(id);
    } else {
      setCart((prevState) =>
        prevState.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, count: value } : cartItem
        )
      );
    }
  };

  const increaseCount = (id) => {
    setCart((prevState) =>
      prevState.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
      )
    );
  };

  const decreaseCount = (id) => {
    setCart((prevState) =>
      prevState.reduce((acc, cartItem) => {
        if (cartItem.id === id) {
          const newCount = cartItem.count - 1;
          if (newCount > 0) {
            acc.push({ ...cartItem, count: newCount });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, [])
    );
  };

  console.log("cart items", cart);

  return (
    <div className="noto-sans-regular xl:p-28">
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1720201061/Stage2/Frame_1171276308_waymuq.png"
        className="hidden p-8 xl:flex"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1720203722/Stage2/Tablet_1171276316_igmbjt.png"
        className="md:flex p-8 xl:hidden hidden"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1720201069/Stage2/Frame_1171276320_z37hef.png"
        className="xl:hidden p-8 md:hidden lg:hidden"
        alt=""
      />
      {cart.map((item, index) => (
        <div key={`${item.name}` + `${index}`}>
          <div className="flex flex-col md:h-full justify-between gap-4 m-10 md:flex-row">
            <div className="flex md:h-full xl:w-[500px] md:mt-3 xl:p-10 bg-green-200 flex-col mx-1 w-[100%] h-64 p-20 justify-center items-center">
              <img
                src={`http://api.timbu.cloud/images/${item.photos[0].url}`}
                alt=""
              />
            </div>
            <div className="mx-3 item flex flex-col md:gap-2 md:w-[100%] xl:gap-4 gap-4">
              <h1 className="noto-sans-semibold text-[25px]">{item.name}</h1>
              <p className="text-[#00000099] md:text-[14px] md:w-[350px] xl:w-[800px]">
                {item.description}
              </p>
              <div className="flex justify-between gap-3 items-center">
                <div className="flex text-[#00000099] text-[21.64px] gap-2 item-center">
                  <h1 className="text-[21.64px] noto-sans-semibold mb-1">
                    &#8358; {item.price ?? "10,000"}
                  </h1>
                  <p className="text-[9.82px] noto-sans-bold mt-2">
                    &#8358;20,000
                  </p>
                  <img
                    src="https://res.cloudinary.com/demmasgzp/image/upload/v1720390093/Stage2/sale_badge_c6kwqv.png"
                    className="h-6 mt-1"
                    alt=""
                  />
                </div>
                <div className="ml-6 flex flex-col gap-1 text-[11.08px] md:hidden xl:flex">
                  <img
                    src="https://res.cloudinary.com/demmasgzp/image/upload/v1720390093/Stage2/rating_suwck2.png"
                    className="h-4"
                    alt=""
                  />
                  <p className="text-[#00000099] flex text-[11.08px]">12k reviews</p>
                </div>
              </div>
              <div className="xl:flex md:flex items-center gap-5">
                <p className="text-[16px]">Color</p>
                <div className="grid grid-cols-4 w-[55%] md:hidden xl:flex gap-5 my-3">
                  <p className="bg-[#D3A693] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#2C384C] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#5C493B] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#4E6553] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#D13821] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#FFD205] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#3C3B5C] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#2AC84C] p-4 w-4 rounded-full"></p>
                </div>
                <div className="hidden md:flex gap-5 xl:hidden">
                  <p className="bg-[#D13821] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#FFD205] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#3C3B5C] p-4 w-4 rounded-full"></p>
                  <p className="bg-[#2AC84C] p-4 w-4 rounded-full"></p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="px-3 py-1 border rounded-lg"
                  onClick={() => decreaseCount(item.id)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.count}
                  onChange={(e) => handleChange(e, item.id)}
                  min="0"
                  step="1"
                  className="w-20 h-10 pl-5 visible rounded-lg border-2 px-1"
                />
                <button
                  className="px-3 py-1 border rounded-lg"
                  onClick={() => increaseCount(item.id)}
                >
                  +
                </button>
              </div>
              <div className="flex text-[11.08px] md:flex-col gap-4 my-3">
                <div className="flex items-center p-3 border-2 w-32 gap-2 rounded-lg border-gray-200">
                  <img
                    src="https://res.cloudinary.com/demmasgzp/image/upload/v1720391521/Stage2/outline_vwreum.png"
                    className="h-5"
                    alt=""
                  />
                  <p>Favourites</p>
                </div>
                <div className="flex items-center p-2 border-2 w-48 gap-2 rounded-lg border-gray-200">
                  <img
                    src="https://res.cloudinary.com/demmasgzp/image/upload/v1720391554/Stage2/delete_1_yedvur.png"
                    className="h-5"
                    alt=""
                    onClick={() => deleteFromCart(item.id)}
                  />
                  <p>Remove from Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between">
        <button
          onClick={() => clearCart()}
          className="bg-gradient-to-br from-red-900 rounded-lg to-red-800 p-3 mb-2 flex text-white md:text-[25.81px] xl:px-8 xl:mr-10 items-center mr-6"
        >
          CLEAR CART
        </button>
        <button className="bg-gradient-to-br from-[#269255] rounded-lg to-[#2D4C74] p-3 mb-2 flex text-white md:text-[25.81px] xl:px-8 xl:mr-10 items-center mr-6">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;