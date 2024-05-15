import { A } from "@solidjs/router";
import { Component } from "solid-js";

const AboutPage: Component = () => {
    return (
      <div class="page_container">
        <div class="text-2xl">Implementation</div>
        <div class="mt-3">This is website is created by Matthew Ko, and the source code is available on <A href="https://github.com/thematthewko114/lets_hang_out" class="link">GitHub</A>, it is intended to be an open-source project. Feel Free to contribute!</div>
        <div class="mt-2">Let's Hang Out is a side-project to discover some up-and-coming tools for web development. The structure of the project is still under construction. The frontend is developed in <A href="https://www.solidjs.com/" class="link">SolidJS</A>, and the backend is developed in <A href="https://gin-gonic.com" class="link">Go</A>.</div>
      </div>
    );
  };
  
  export default AboutPage;
  