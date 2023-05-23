import { Card } from "../components/Card";
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";
export const Landing = () => {
  return (
    <>
      <Card
        title="JoezCoffee"
        header="Enjoy Your Morning Coffee"
        desc="Boost your productivity and build your mood with a cup of coffee"
        img="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        but1="View Menu"
        but2="Our Mission"
      />
      <Card
        title="Our Coffee"
        header="Choose Your Favorite Coffee"
        desc="A variety of coffee ready to be sercved by our professional baristas"
        img="https://perfectdailygrind.com/wp-content/uploads/2016/01/espresso-shot-being-pulled.jpg"
        idx="1"
      />
      <div className="max-w-full h-[120vh] flex justify-center mx-auto bg-gray-800 overflow-hidden md:h-[60vh] md:min-w-2xl md:max-w-full">
        <div className="flex flex-col w-full text-white p-5 m-5">
          <div className="text-3xl my-10">How do you like your coffee?</div>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="flex flex-col items-center p-2 space-y-5">
              <GiCoffeeBeans size={70} color="#9c6f44" />
              <div>Beans</div>
              <div className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
                nulla, gravida eget feugiat non, pretium a diam. In ut consequat
                leo. Phasellus ac consectetur diam.
              </div>
            </div>
            <div className="flex flex-col items-center p-2 space-y-5">
              <MdCoffeeMaker size={70} color="#9c6f44"/>
              <div>Espressos</div>
              <div className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
                nulla, gravida eget feugiat non, pretium a diam. In ut consequat
                leo. Phasellus ac consectetur diam.
              </div>
            </div>
            <div className="flex flex-col items-center p-2 space-y-5">
              <GiCoffeePot size={70} color="#9c6f44" />
              <div className="border-l-slate-900">Brewing</div>
              <div className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
                nulla, gravida eget feugiat non, pretium a diam. In ut consequat
                leo. Phasellus ac consectetur diam.
              </div>
            </div>
            <div className="flex flex-col items-center p-2 space-y-5">
              <FaCoffee size={70} color="#9c6f44" />
              <div>Teas</div>
              <div className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
                nulla, gravida eget feugiat non, pretium a diam. In ut consequat
                leo. Phasellus ac consectetur diam.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full h-[80vh] flex justify-center items-center flex-col mx-auto bg-slate-100 overflow-hidden md: min-w-2xl md:max-w-full space-y-5 p-5  font-poppins text-center">
        <div>SOMETHING HERE</div>
      </div>
      <div className="max-w-full h-[80vh] flex justify-center items-center flex-col mx-auto bg-slate-100 overflow-hidden md: min-w-2xl md:max-w-full space-y-5 font-poppins text-center">
        <div className="h-[30vh] w-full flex flex-col justify-center items-center space-y-5 bg-slate-200">
          <p className="text-5xl">We're here to help!</p>
          <p className="">
            Have any Questions? We are glad to answer, <a>contact Us</a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 p-3">
          <p className="text-5xl">Subcribe to Our Newsletter</p>
          <p>
            Be the first to learn about promotions, new beverages, events and
            more.
          </p>
          <div className="flex w-full space-x-4">
            <input
              class="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
            />
            <button
              class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
