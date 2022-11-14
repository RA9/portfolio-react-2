import React from "react";

export default function AuthorCard() {
  return (
    <div
      id="intro"
      class="bg-[#
      3EAEAEA] h-auto my-6 py-8 rounded-lg border-4"
    >
      <div id="avatar" class="flex justify-center py-2">
        <img
          class="w-40"
          src="https://api.multiavatar.com/HN.svg"
          alt="Carlos"
        />
      </div>
      <div id="content" class="prose lg:prose-xl px-2">
        <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">
          Humble S. Nah
        </h1>
        <small class="text-center block text-md text-gray-800">
          Writer, Teacher &amp; Software Engineer
        </small>
        <p class="text-justify text-lg text-gray-800">
          Hi! I am the guy who doesn't know how to say <b>Hello world</b> in
          French; I am not limited by this anyways, because I can <em>C</em>{" "}
          things.
        </p>
      </div>
    </div>
  );
}
