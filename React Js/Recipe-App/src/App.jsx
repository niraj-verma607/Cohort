import Navbar from "./Components/Navbar";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <div className="py-5 px-[10%] w-full h-full bg-gray-800 text-white font-thin">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
