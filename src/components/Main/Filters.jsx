import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Filters = () => {
	return (
		<div id="filters" className="w-full">
      <div className="contribute bg-[var(--bg-light-color)] p-4 rounded-md">
        <h2 className="font-black">Contribute to Stark</h2>
        <p className="py-4">Got any accessibility resources or news?</p>
        <button className="bg-[var(--blue)] text-white py-2 px-6 rounded-md duration-300 hover:opacity-80">Submit a Resource</button>
      </div>
			<div className="filters flex justify-between">
				<a href="" className="text-[var(--blue)]">Library</a>
				<a href="">Collections</a>
				<a className="flex gap-1 items-center">
					Categories <IoIosArrowDown />
				</a>
			</div>
			<div className="search relative">
        <p className="opacity-80 mb-2">Search Library</p>
				<IoSearchSharp className="absolute left-3 bottom-3 text-[var(--border-light-color)] text-xl" />
				<input
					type="text"
					className="border-2 rounded-md pl-10 p-2 px-4 mt-4 w-full outline-none duration-200 focus:border-[var(--blue)]"
				/>
			</div>
		</div>
	);
};

export default Filters;
