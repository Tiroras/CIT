import React, {useState} from 'react';
import Search from "./Search";


const SearchContainer = () => {
  const [value, setValue] = useState<string>("");


  return(
    <div>
      <Search
        value={value}
        setValue={setValue}
      />
    </div>
  )
}

export default SearchContainer;