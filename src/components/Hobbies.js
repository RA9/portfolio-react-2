import React from "react";

export default function Hobbies() {
    return (
        <div
        id="hobbie"
        class="bg-[#FFD8A9] h-50 my-6 py-8 rounded-lg border-4"
      >
         <div class="flex justify-center">
          <h3 class="border-4 w-25  border-dashed px-4 py-2 font-bold text-md">Hobbies</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
            Video Games
          </summary>
          <p>
            I not attending Blucrest and I am just testing things out.
          </p>
        </details>


        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
            Reading and Writing
          </summary>
          <p>
            I not attending Blucrest and I am just testing things out.
          </p>
        </details>


        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
            Listening to Music
          </summary>
          <p>
            I not attending Blucrest and I am just testing things out.
          </p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
             Sports Lover
          </summary>
          <p>
            I not attending Blucrest and I am just testing things out.
          </p>
        </details>

      </div>
    )
}