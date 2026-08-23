import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="grid grid-cols-5 h-screen bg-zinc-900 text-white">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Right Section */}
      <RightSidebar />
    </div>
  );
}

export default App;
