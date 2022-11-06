import React from "react";

function Search(){

    const [searchKeyWord, setSearchKeyword] = React.useState("");

    function handleOnChange(evt){
        setSearchKeyword(evt.target.value);
    }
      
      
    return(
        <div>
        <h1>{searchKeyWord}</h1>
        <input type="text" onChange={handleOnChange}/>
        </div>
    );
}

export default Search;