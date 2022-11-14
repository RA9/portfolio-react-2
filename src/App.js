import "./App.css";
import Navbar from "./components/Navbar";
import AuthorCard from "./components/AuthorCard";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
           <AuthorCard />


            {/* <!-- Work --> */}
           <Work />
            {/* <!-- Education --> */}
           <Education />
            {/* <!-- Hobbies --> */}
           <Hobbies />
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}

export default App;
