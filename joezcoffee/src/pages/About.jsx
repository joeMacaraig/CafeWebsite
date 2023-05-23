import { TfiEmail } from "react-icons/tfi";
import { SlPhone } from "react-icons/sl";
import { ImInstagram } from "react-icons/im";

export const About = () => {
  return (
    <div className="max-w-full h-full flex flex-col justify-evenly items-center mx-auto bg-slate-100 overflow-hidden md: min-w-2xl md:max-w-full">
      <div className="h-[50vh] w-full flex flex-wrap md:flex-nowrap md: justify-evenly items-center space-x-0 md:space-x-5 p-5">
        <div id="mission" className="h-auto w-[500px] text-4xl tracking-wide font-poppins text-coffee m-2 ">
          <span>JoezCoffee</span>
          <span className="text-black">
            {" "}
            brings people together, one cup of coffee at a time.
          </span>
        </div>
        <div className="h-auto w-[600px] m-2 p-2 text-justify text-lg">
          <p>
            Located in the heart of Eagle Rock, a vibrant community in Los
            Angeles, California. Our cafe is more than just a place to grab a
            cup of coffee or a bite to eat - it's a gathering place for the
            community, where friends and neighbors can come together to share a
            meal, catch up on the latest news, or simply enjoy a moment of
            relaxation.
          </p>
        </div>
      </div>
      <div className="lg:shrink-0 h-[110vh] w-full flex flex-wrap md:h-[40vh] md:flex-nowrap justify-evenly md:space-x-5 space-x-0 p-5">
        <div
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/122370/pexels-photo-122370.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
          className="h-51 w-full bg-black bg-cover bg-center"
          alt="coffee-images"
        />
        <div
          style={{
            backgroundImage:
              "url('https://www.upmenu.com/wp-content/uploads/2022/08/Small-Cafe-Interior-Design.jpg')",
          }}
          className="h-51 w-full bg-black bg-cover bg-center"
          alt="coffee-images"
        />
        <div
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
          className="h-51 w-full bg-black bg-cover bg-center"
          alt="coffee-images"
        />
        {/* <img
          className="h-51 flex-1 object-cover md:h-full"
          src="https://images.pexels.com/photos/122370/pexels-photo-122370.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="coffee-images"
        />
        <img
          className="h-51 flex-1 object-cover md:h-full"
          src="https://www.upmenu.com/wp-content/uploads/2022/08/Small-Cafe-Interior-Design.jpg"
          alt="coffee-images"
        />
        <img
          className="h-51 flex-1 object-cover md:h-full"
          src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="coffee-images"
        /> */}
      </div>
      <div className="h-full w-full p-10">
        <div className="w-full justify-evenly flex flex-wrap md:flex-nowrap border-y-4 border-gray-300 py-10">
          <div className="w-[500px] text-4xl font-semibold">
            Discover our coffee journey, join our welcoming community.
          </div>
          <div className="w-[600px] text-lg text-justify space-y-5 p-2">
            <p className="font-semibold">
              As our cafe team grows, we are excited to welcome new members who
              share our passion for coffee and our commitment to creating a warm
              and comfortable space for our customers.
            </p>
            <p className="text-slate-600">
              At JoezCoffee, we believe that coffee is more than just a beverage
              it's a cultural and social experience that has the power to bring
              people together. Our love for coffee runs deep, and we are
              passionate about sharing that love with others. We take pride in
              serving fresh, locally-sourced ingredients and handcrafted
              beverages that are as delicious as they are unique. Our skilled
              roasters carefully roast each batch of beans to perfection,
              bringing out the unique flavors and aromas of each coffee. But we
              don't stop there. We believe in creating an atmosphere that's
              warm, welcoming, and inviting - a place where everyone feels at
              home. We believe that coffee is meant to be enjoyed in good
              company, and that's why we create welcoming spaces where people
              can gather, connect, and enjoy a cup of coffee together. Our
              friendly and knowledgeable baristas are always ready to recommend
              a new blend or share their expertise on brewing techniques.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className="h-full w-full p-10">
        <div className="w-full justify-evenly flex flex-wrap md:flex-nowrap">
          <div className="w-[500px] text-4xl font-semibold mb-5">
            Contact Us
          </div>
          <div className="w-[600px] text-lg text-justify space-y-5">
            <p className="text-slate-600">
              We would love to hear from you! Whether you have a question or a
              feedback please don't hesitate to reach out. You can contact us
              through email, phone, or social media. We are committed to
              providing the best possible experience for our customers. We can't
              wait to connect with you!
            </p>
            <div className="w-[300px] space-y-2">
              <div className="flex items-center">
                <SlPhone />
                <p className="w-full mx-2">+1-234-456-7890 </p>
              </div>
              <div className="flex items-center">
                <TfiEmail />
                <p className="w-full mx-2">joezcoffee@emample.com</p>
              </div>
              <div className="flex items-center">
                <ImInstagram />
                <p className="w-full mx-2">@joezcoffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
