import React from "react";
import { Link } from "react-router-dom";
const LgNav = () => {
  return (
    <section className="w-full md:flex hidden h-full">
      <div className=" relative w-full h-full flex justify-center items-center">
        <div className=" lg:max-w-6xl md:max-w-3xl relative top-16 h-full w-full">
          <div className="w-full h-24 flex text-2xl justify-between text-{#899878}">
            <Link to="/" className=" font-silkscreen">
              Rhythms 2024
            </Link>
            <div className=" flex justify-between gap-8 font-silkscreen">
              <Link to="/">memories</Link>
              <Link to="/">events</Link>
              <Link to="/">Core team</Link>
            </div>
          </div>
          {/* logo */}
          <div className=" w-full relative top-20 flex gap-10 justify-center items-center">
            <img
              className=" w-96 h-96 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMGQMpNKdwKp77tAqhM5F5rTHQJHTARdAeg&usqp=CAU"
              alt="img"
            />
            <h2>
              Explore the threads of history and the promise of tomorrow at our
              festival! Enjoy exciting competitions that journey through various
              eras, crafting moments that stand the test of time. Join us for an
              unforgettable experience where every instant becomes a timeless
              masterpiece.{" "}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

const MdNav = () => {
  return (
    <section className="w-full  h-full max-sm:hidden sm:flex   md:hidden">
      <div className=" relative w-full h-full flex justify-center items-center">
        <div className=" max-w-xl relative top-16 h-full w-full">
          <div className="w-full h-24 flex text-lg justify-between text-{#899878}">
            <Link to="/" className=" font-silkscreen">
              Rhythms 2024
            </Link>
            <div className=" flex justify-between gap-5 font-silkscreen">
              <Link to="/">memories</Link>
              <Link to="/">events</Link>
              <Link to="/">Core team</Link>
            </div>
          </div>
          {/* logo */}
          <div className=" w-full relative top-20 flex justify-center items-center">
            <img
              className=" w-96 h-96 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMGQMpNKdwKp77tAqhM5F5rTHQJHTARdAeg&usqp=CAU"
              alt="img"
            />
            <h2>
              Explore the threads of history and the promise of tomorrow at our
              festival! Enjoy exciting competitions that journey through various
              eras, crafting moments that stand the test of time. Join us for an
              unforgettable experience where every instant becomes a timeless
              masterpiece.{" "}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
const SMNav = () => {
  return (
    <>
      <section className=" bottom-0 left-0 fixed z-[1000] text-white overflow-hidden w-full  max-sm:flex sm:hidden">
        <div className=" relative w-full h-full flex justify-center items-center">
          <div className=" bg-[#5e6853] p-5  rounded-tr-3xl rounded-tl-3xl relative h-full  w-full">
            <div className="w-full h-full flex text-md font-silkscreen justify-between text-{#899878}">
              {/* <Link to="/" className=" font-silkscreen">
              Rhythms 2022
            </Link> */}
              {/* <div className=" flex justify-between gap-5 font-silkscreen"> */}
              <Link to="/">memories</Link>
              <Link to="/">events</Link>
              <Link to="/">Core team</Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* logo */}
        <div className=" w-full relative top-20 flex-col  justify-center items-center  max-sm:flex sm:hidden">
          hello
          <img
            className=" w-96 h-96 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMGQMpNKdwKp77tAqhM5F5rTHQJHTARdAeg&usqp=CAU"
            alt="img"
          />
          <h2>
            Explore the threads of history and the promise of tomorrow at our
            festival! Enjoy exciting competitions that journey through various
            eras, crafting moments that stand the test of time. Join us for an
            unforgettable experience where every instant becomes a timeless
            masterpiece.{" "}
          </h2>
        </div>
      </section>
    </>
  );
};
const Navbar = () => {
  return (
    <>
      <LgNav />
      <MdNav />
      <SMNav />
    </>
  );
};

export default Navbar;
