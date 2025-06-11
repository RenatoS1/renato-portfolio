
import "./App.css";
import Header from "./components/Header";


function App() {
  return (
    <>
      <div className="relative z-0 text-white">
        <main className="relative z-10 p-10">
          <h1 className="text-4xl font-bold">Meu Portfólio</h1>
          <p className="mt-4">Bem-vindo ao meu site!</p>
        </main>
      </div>
      <Header />
    </>
  );
}

export default App;
