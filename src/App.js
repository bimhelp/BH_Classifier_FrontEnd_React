import "./App.css";
import data from "./classifier.json";
import AddForm from "./components/AddForm/AddForm";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <h1>Classifier table</h1>
      <AddForm />
      <Table data={data} />
    </>
  );
}

export default App;
