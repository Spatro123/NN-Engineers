import React, { useState } from 'react';
import classes from './Searchbar.module.css';
import searchIcon from "./search1.png";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
   
    console.log("Searching for:", searchQuery);
    
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <div className={classes.logo}>NN Engineers</div>
        <button className={classes.closebutton}>CLOSE</button>
      </header>
      <div className={classes.searchcontainer}>
        <div>
          <input
            type="text"
            className={classes.searchinput}
            placeholder=""
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className={classes.searchbutton} onClick={handleSearch}>
            <img src={searchIcon} className={classes.search} alt="Search" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
