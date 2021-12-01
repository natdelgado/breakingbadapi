import React, {useState, useEffect} from 'react';
import axios from "./Components/api";
import Header from './Components/Header.js';
import SearchBar from './Components/SearchBar';
import CharacterList from './Components/CharacterList';
import Spiner from './Components/spiner'


function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const[query, setQuery] = useState("");

  useEffect(() =>{
    const fetchItems = async() =>{
      const results = await axios.get(`/characters?name=${query}`)
      setItems(results.data);
      setLoading(false)
    };
    fetchItems();
  }, [query]);

  return(
    <div className="app">
      <Header/>
      <SearchBar setQuery={(query) => setQuery(query)} query={query}/>
      {loading ? <Spiner /> : <CharacterList items={items}/> }
      
    </div>
  )
}

export default App;
