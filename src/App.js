import s from "./App.module.css";
import CategoryList from "./Components/CategoryList";
import data from "./Components/data/data";

function App() {
  console.log(data);
  return (
    <div className={s.App}>
      <header className={s.App_header}>
        <h1>
          Bar Exam Preparation 2024/Підготовка до адвокатського екзамену 2024
        </h1>
      </header>
      <main>
        <CategoryList />
      </main>
    </div>
  );
}

export default App;
