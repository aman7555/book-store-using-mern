import React from "react";
import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-28  items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are Delighted to have you
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className=" mt-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            consequatur dignissimos? Nobis, accusamus! Recusandae, iure tempora!
            Cupiditate nihil quisquam tempore non ducimus asperiores. Eveniet
            voluptatem alias veniam inventore velit? Animi illo laboriosam
            deleniti asperiores et incidunt autem dicta quo doloribus.
          </p>
          <Link to="/">
            <button className="bg-pink-500 hover:bg-pink-700 duration-300 px-3 py-1 mt-6 rounded-md text-white">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-4">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
