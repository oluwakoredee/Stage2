/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Image from "../components/Image"; // thi is not imported correctly
// import getProducts from '../utils'
import axios from "axios";
import useLocalStorage from '../hook/use-localstorage';
import useDataControl from '../hook/use-datacontrol';

const app_ID = import.meta.env.VITE_APP_ID;
const org_ID = import.meta.env.VITE_ORG_ID;
const api_KEY = import.meta.env.VITE_API_KEY;



const Home = () => {
  const [products, setProducts] = useState([]);

  const [slicedData, handleIncrement, handleDecrement] = useDataControl(products);
  
const [_, setCart] = useLocalStorage('tumbi', []);

const addToCart = (cartItem) => {
  setCart((prevCart) => {
    // Check if the product already exists in the cart
    const existingItemIndex = prevCart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
      // If the product exists, update the count
      const updatedCart = [...prevCart];
      updatedCart[existingItemIndex].count++;
      return updatedCart;
    } else {
      // If the product doesn't exist, add it to the cart with a count of 1
      return [...prevCart, { ...cartItem, count: 1 }];
    }
  });
};
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios
          .get(
            `/api/products?organization_id=${org_ID}&reverse_sort=false&Appid=${app_ID}&Apikey=${api_KEY} `,
            { withCredentials: true, credentials: "included" }
          )
          .then((e) => {
            if (e.data) {
              setProducts(e.data.items);
              console.log(e.data);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  console.log(products);
  //check your console
  // its not showingss
  return (
    <div className="md:px-5 ">
      <Image
        className="hidden p-8 xl:flex"
        id={"v1720201061/Stage2/Frame_1171276308_waymuq.png"}
      />
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1720201061/Stage2/Frame_1171276308_waymuq.png"
        className="hidden p-8 xl:flex"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1720203722/Stage2/Tablet_1171276316_igmbjt.png"
        className="md:flex  p-8 xl:hidden hidden"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1720201069/Stage2/Frame_1171276320_z37hef.png"
        className="xl:hidden p-8 md:hidden lg:hidden"
        alt=""
      />
      <div className="xl:flex xl:justify-center xl:gap-[400px] xl:items-center ">
        <div className="flex justify-center gap-1 md:gap-3 items-center xl:">
          <div className="md:hidden flex items-center gap-3 px-5 py-4 rounded-xl border-[1px] border-[#00000033] ">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720210482/Stage2/search_bt6y1o.png"
              className="h-5"
              alt=""
            />
            <p>Search</p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720210480/Stage2/ck_jwp7k9.png"
              className="h-5"
              alt=""
            />
          </div>
          <div className="md:flex items-center gap-3 px-5 py-4 hidden rounded-xl border-[1px] border-[#00000033]">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720210482/Stage2/search_bt6y1o.png"
              className="h-5"
              alt=""
            />
            <p>Search by Product,Manufacturer...</p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720210480/Stage2/ck_jwp7k9.png"
              className="h-5"
              alt=""
            />
          </div>
          <div className="flex  items-center justify-start pl-6 gap-3 pr-20 md:pr-6 rounded-xl py-4 border-[1px] border-[#00000033]">
            <p>Filter</p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720210479/Stage2/text-align-center_seqhyh.png"
              className="h-5"
              alt=""
            />
          </div>
          <div className="hidden xl:hidden md:flex pl-6 gap-3 pr-12 items-center rounded-xl py-4 border-[1px] border-[#00000033]">
            <p>Categories</p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194411/Stage2/arrow-down-01-round_ugumy1.png"
              className="h-5"
              alt=""
            />
          </div>
        </div>
        <div className="xl:flex hidden justify-between gap-3 ">
          <div className="flex items-center border-[1px] py-4 px-4 rounded-xl border-[#00000033]">
            <p>Categories</p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194411/Stage2/arrow-down-01-round_ugumy1.png"
              className="h-5"
              alt=""
            />
          </div>
          <div className="flex items-center border-[1px] py-4 px-4 rounded-xl border-[#00000033]">
            <p>Manufacturers</p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194411/Stage2/arrow-down-01-round_ugumy1.png"
              className="h-5"
              alt=""
            />
          </div>
          <div className="flex items-center border-[1px] py-4 px-4 rounded-xl border-[#00000033]">
            <p>Colors</p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194411/Stage2/arrow-down-01-round_ugumy1.png"
              className="h-5"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-2 mt-6 items-center ml-[62px] xl:ml-[72px] ">
        <p className="border-[1px] py-4 px-6 rounded-xl border-[#00000033]">
          Max.Price
        </p>
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720277739/Stage2/Group_1000004205_byfeii.png"
          className="flex items-center w-20"
          alt=""
        />
        <p className="border-[1px] py-4 px-6 rounded-xl border-[#00000033]">
          Min.Price
        </p>
      </div>
      <div className="flex border-[1px] mx-10 bg-[#0F8642] text-white py-4 px-6 rounded-xl mt-6 justify-between">
        <p>Flash sales</p>
        <p>Ends on 30th July</p>
      </div>
      <div className="flex flex-col gap-10 mt-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        {slicedData.map((product, index) => (
          <div key={`${product.name}` + `${index}`}>
            <div className=" mx-8 border-[1px] rounded-2xl   border-[#00000033]">
              <div className="flex flex-col rounded-t-2xl  bg-green-200 justify-center items-center">
                <img
                  src={`http://api.timbu.cloud/images/${product.photos[0].url}`}
                  className=" rounded-t-2xl py-6  bg-green-200  h-[248px] w-[216px]"
                  alt=""
                />
              </div>
              <div className="p-10 flex flex-col gap-2">
                <div className="flex items-center  justify-between">
                  <h1 className="noto-sans-semibold text-[24px] ">
                    {product.name}
                  </h1>
                  <p className="text-[#269255]"> {product.price}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_183_uldtfc.png"
                    className="h-3"
                    alt=""
                  />
                  <p>(2k)</p>
                </div>
                <p className="text-[#269255]"> {product.description}</p>
                <button className="flex bg-[#269255] text-white hover:bg-green-800 w-[65%] rounded-xl justify-center gap-2 px-3 p-1 items-center " onClick={()=> addToCart(product)}>
                  <p>Add to Cart</p>
                  <img src="https://res.cloudinary.com/demmasgzp/image/upload/v1720901305/Stage2/mdi_cart-outline_f5677l.png" className="h-8" alt="" />
                </button>
              </div>
            </div>
            {/* <p className="text-[#269255]"> #{product.name}</p>
            <p className="text-[#269255]"> ${product.description}</p>
            <p className="text-[#269255]"> @{product.buying_price}</p> */}
          </div>
        ))}
        
        <div className="flex border-[1px] mx-10 bg-[#0F8642] md:hidden text-white py-4 px-6 rounded-xl mt-0 justify-between">
          <p>Available Products</p>
        </div>
        <div className="md:flex md:gap-[50px] items-center xl:gap-[600px] flex flex-col gap-2 md:px-1  w-screen justify-center">
          <div className="flex gap-3">
            {/* <p className="noto-sans-regular">Showing</p>
            <h1 className="noto-sans-bold">1 to 5 of 120</h1>
            <p className="noto-sans-regular">Products</p> */}
          </div>
          <div className="flex gap-3 items-center">
          <button onClick={handleDecrement}>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720302185/Stage2/square-arrow-left-double-round_ct7jpq.png"
              className="bg-[#F5F5F5] h-14 px-6 py-4 border-[1px] rounded-lg  border-[#00000033]"
              alt=""
            />
            </button>
            <p className="px-6 py-4 border-[1px] rounded-lg bg-[#F5F5F5]  border-[#00000033]">
              1
            </p>
            <p className="px-6 py-4 border-[1px] rounded-lg  border-[#00000033]">
              2
            </p>
            <p className="px-6 py-4 border-[1px] rounded-lg  border-[#00000033]">
            {products.length/10}
            </p>
            <button onClick={handleIncrement}>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720302185/Stage2/square-arrow-right-double-round_armjwo.png"
              className="h-14 px-6 py-4 border-[1px] rounded-lg bg-[#F5F5F5] border-[#00000033]"
              alt=""
            />
            </button>
          </div>
        </div>
      </div>
      <p className="flex justify-end mt-3 pr-9 md:hidden">See all</p>
      <div className="hidden md:flex border-[1px] mt-20 mx-10 bg-[#0F8642] text-white py-4 px-6 rounded-xl justify-between">
        <p>Available Products</p>
      </div>
      {/* next */}
      {/* <div className="hidden flex-col gap-5 mt-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        <div className=" mx-8 border-[1px] rounded-2xl   border-[#00000033]">
          <div className="flex flex-col rounded-t-2xl  bg-green-200 justify-center items-center">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278909/Stage2/close-up-futuristic-sneakers_1_sgplwx.png"
              className=" rounded-t-2xl  h-[248px] w-[216px]"
              alt=""
            />
          </div>
          <div className="p-10 flex flex-col gap-2">
            <div className="flex items-center  justify-between">
              <h1 className="noto-sans-semibold text-[24px] ">Nike Air Max</h1>
              <p className="text-[#269255]"> #13,000</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_183_uldtfc.png"
                className="h-3"
                alt=""
              />
              <p>(2k)</p>
            </div>
            <p>
              Perfect for any activity, this sneaker provide the support you
              need for workouts, the style you want for everyday wear, and the
              durability to last.
            </p>
            <Link to={"/cart"} className="flex items-center ">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_1171276310_oefymu.png"
                className="h-10 w-40"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className=" mx-8 border-[1px] rounded-2xl  border-[#00000033]">
          <div className="flex flex-col rounded-t-2xl  bg-green-200 justify-center items-center">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720281296/Stage2/close-up-futuristic-sneakers_1_1_sqeymk.png"
              className=" rounded-t-2xl  h-[248px] w-[216px]"
              alt=""
            />
          </div>
          <div className="p-10 flex flex-col gap-2">
            <div className="flex items-center  justify-between">
              <h1 className="noto-sans-semibold text-[24px] ">Nike Air Max</h1>
              <p className="text-[#269255]"> #17,000</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_183_uldtfc.png"
                className="h-3"
                alt=""
              />
              <p>(2k)</p>
            </div>
            <p>
              Perfect for any activity, this sneaker provide the support you
              need for workouts, the style you want for everyday wear, and the
              durability to last.
            </p>
            <Link to={"/cart"} className="flex items-center ">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_1171276310_oefymu.png"
                className="h-10 w-40"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className=" mx-8 border-[1px] rounded-2xl   border-[#00000033]">
          <div className="flex flex-col rounded-t-2xl  bg-green-200 justify-center items-center">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720281296/Stage2/close-up-futuristic-sneakers_1_2_zgba2c.png"
              className=" rounded-t-2xl  h-[248px] w-[216px]"
              alt=""
            />
          </div>
          <div className="p-10 flex flex-col gap-2">
            <div className="flex items-center  justify-between">
              <h1 className="noto-sans-semibold text-[24px] ">Nike Air Max</h1>
              <p className="text-[#269255]"> #29,000</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_183_uldtfc.png"
                className="h-3"
                alt=""
              />
              <p>(2k)</p>
            </div>
            <p>
              Perfect for any activity, this sneaker provide the support you
              need for workouts, the style you want for everyday wear, and the
              durability to last.
            </p>
            <Link to={"/cart"} className="flex items-center ">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_1171276310_oefymu.png"
                className="h-10 w-40"
                alt=""
              />
            </Link>
          </div>
        </div>
        <p className="flex justify-end pr-9 md:hidden">See all</p>

        <div className="flex border-[1px] mx-10 bg-[#0F8642] md:hidden text-white py-4 px-6 rounded-xl mt-6 justify-between">
          <p>Available Products</p>
        </div>

        <div className=" mx-8 border-[1px] rounded-2xl  md:hidden xl:flex xl:flex-col   border-[#00000033]">
          <div className="flex flex-col rounded-t-2xl  bg-green-200 justify-center items-center">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278909/Stage2/close-up-futuristic-sneakers_1_sgplwx.png"
              className=" rounded-t-2xl  h-[248px] w-[216px]"
              alt=""
            />
          </div>
          <div className="p-10 flex flex-col gap-2">
            <div className="flex items-center  justify-between">
              <h1 className="noto-sans-semibold text-[24px] ">Nike Air Max</h1>
              <p className="text-[#269255]"> #13,000</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_183_uldtfc.png"
                className="h-3"
                alt=""
              />
              <p>(2k)</p>
            </div>
            <p>
              Perfect for any activity, this sneaker provide the support you
              need for workouts, the style you want for everyday wear, and the
              durability to last.
            </p>
            <Link to={"/cart"} className="flex items-center ">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_1171276310_oefymu.png"
                className="h-10 w-40"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className=" mx-8 border-[1px] rounded-2xl  md:hidden xl:flex xl:flex-col   border-[#00000033]">
          <div className="flex flex-col rounded-t-2xl  bg-green-200 justify-center items-center">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720281296/Stage2/close-up-futuristic-sneakers_1_1_sqeymk.png"
              className=" rounded-t-2xl  h-[248px] w-[216px]"
              alt=""
            />
          </div>
          <div className="p-10 flex flex-col gap-2">
            <div className="flex items-center  justify-between">
              <h1 className="noto-sans-semibold text-[24px] ">Nike Air Max</h1>
              <p className="text-[#269255]"> #17,000</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_183_uldtfc.png"
                className="h-3"
                alt=""
              />
              <p>(2k)</p>
            </div>
            <p>
              Perfect for any activity, this sneaker provide the support you
              need for workouts, the style you want for everyday wear, and the
              durability to last.
            </p>
            <Link to={"/cart"} className="flex items-center ">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_1171276310_oefymu.png"
                className="h-10 w-40"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className=" mx-8 border-[1px] rounded-2xl  border-[#00000033]">
          <div className="flex flex-col  bg-green-200 rounded-t-2xl  justify-center items-center">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720281296/Stage2/close-up-futuristic-sneakers_1_2_zgba2c.png"
              className=" rounded-t-2xl  h-[248px] w-[216px]"
              alt=""
            />
          </div>
          <div className="p-10 flex flex-col gap-2">
            <div className="flex items-center  justify-between">
              <h1 className="noto-sans-semibold text-[24px] ">Nike Air Max</h1>
              <p className="text-[#269255]"> #29,000</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_183_uldtfc.png"
                className="h-3"
                alt=""
              />
              <p>(2k)</p>
            </div>
            <p>
              Perfect for any activity, this sneaker provide the support you
              need for workouts, the style you want for everyday wear, and the
              durability to last.
            </p>
            <Link to={"/cart"} className="flex items-center ">
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1720278908/Stage2/Frame_1171276310_oefymu.png"
                className="h-10 w-40"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="md:flex md:gap-[50px] items-center xl:gap-[600px] hidden  w-screen justify-center">
          <div className="flex gap-3">
            <p className="noto-sans-regular">Showing</p>
            <h1 className="noto-sans-bold">1 to 5 of 120</h1>
            <p className="noto-sans-regular">Products</p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720302185/Stage2/square-arrow-left-double-round_ct7jpq.png"
              className="bg-[#F5F5F5] h-14 px-6 py-4 border-[1px] rounded-lg  border-[#00000033]"
              alt=""
            />
            <p className="px-6 py-4 border-[1px] rounded-lg bg-[#F5F5F5]  border-[#00000033]">
              1
            </p>
            <p className="px-6 py-4 border-[1px] rounded-lg  border-[#00000033]">
              2
            </p>
            <p className="px-6 py-4 border-[1px] rounded-lg  border-[#00000033]">
              ...
            </p>
            <p className="px-6 py-4 border-[1px] rounded-lg  border-[#00000033]">
              24
            </p>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720302185/Stage2/square-arrow-right-double-round_armjwo.png"
              className="h-14 px-6 py-4 border-[1px] rounded-lg bg-[#F5F5F5] border-[#00000033]"
              alt=""
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
