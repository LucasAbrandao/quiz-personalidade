import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow p-8">
        <Quiz theme="demo-frutas" />
      </div>
    </div>
  );
}

export default App;
