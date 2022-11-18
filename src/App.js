import "./App.css";
import Navbar from "./components/Navbar";
import AuthorCard from "./components/AuthorCard";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import Work from "./components/Work";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    name: "education",
  });
  return (
    <>
      <Navbar />

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
            <AuthorCard isActive={isActive} setIsActive={setIsActive} />

            {isActive.active && isActive.name === "education" ? (
              <Education />
            ) : isActive.active && isActive.name === "work" ? (
              <Work />
            ) : (
              <Hobbies />
            )}
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}

export default App;
