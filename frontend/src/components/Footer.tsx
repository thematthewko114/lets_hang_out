import type { Component } from 'solid-js';
import logo from "../public/images/fist_bump.jpg"

const Footer: Component = () => {
  return (
    <div class="text-center w-screen p-4 bg-emerald-100 min-h-28">
        <div class="my-auto ml-4 font-bold text-lg">Let's Hang Out</div>
        <div>Pre-alpha version - Last updated: 15th May 2024</div>
        <div>Let's Hang Out is developed and owned by <a href="https://www.linkedin.com/in/thematthewko114/" target='_blank' class="link">Matthew Ko</a></div>
    </div>
  );
};

export default Footer;
