import './App.css'
import ViewResult from './components/ViewResult';

function App() {
  return (
    <>
      <ViewResult title="Data" url="/data" />
      <ViewResult title="Error" url="/error" />
      <ViewResult title="Loading" url="/loading" />
    </>
  );
}

export default App;
