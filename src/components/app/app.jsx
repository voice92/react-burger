import React from 'react';
import AppHeader from '../app-header/app-header';
import Main from "../main/main";
import {getData} from '../../utils/api'

function App() {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    getData()
    .then(data => setIngredients(data.data))
    .catch(console.error)
  }, []);

  return (
    <>
      <AppHeader />
      <Main ingredients={ingredients} />
    </>
  );
}

export default App;