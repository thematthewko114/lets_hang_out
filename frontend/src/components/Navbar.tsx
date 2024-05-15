import type { Component } from 'solid-js';
import logo from "../public/images/fist_bump.jpg"

const Navbar: Component = () => {
  return (
    <div class="w-screen py-2 px-4 bg-green-100 h-16">
      <a href="/" class="flex">
        <img src={logo} class="w-12 h-12 rounded-full"  alt="Solid logo" />
        <div class="my-auto ml-4 font-bold text-lg">Lets Hang Out</div>
      </a>
    </div>
  );
};

export default Navbar;
