import { A } from "@solidjs/router";
import { Component } from "solid-js";

const NotFoundPage: Component = () => {
    return (
      <div class="page_container">
        <div class="text-2xl">Page not found</div>
        <div class="mt-3">The page you're trying to access doesn't exist!</div>
        <div class="mt-3">
          <A href="/" class="link">Return to home</A>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;
  