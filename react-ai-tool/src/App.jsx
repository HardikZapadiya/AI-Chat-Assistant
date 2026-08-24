import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="h-screen w-full bg-zinc-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <RightSidebar />
    </div>
  );
}

export default App;
