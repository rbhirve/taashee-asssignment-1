import LanguageSelectionComponent from "./LanguageSelectionComponent";

function App() {
  const items = ["en-US", "en-GB", "pt-BR"];
  return (
    <div>
      <LanguageSelectionComponent items={items} />
    </div>
  );
}

export default App;
