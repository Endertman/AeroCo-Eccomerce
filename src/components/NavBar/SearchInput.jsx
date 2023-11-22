import React, { useState } from "react";
import styled from "styled-components";

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <SearchBarContainer>
      <SearchIcon>
        <i className="fi fi-br-search"></i>
      </SearchIcon>
      <SearchText
        type="text"
        placeholder="BUSCAR"
        onFocus={handleFocus}
        onBlur={handleBlur}
        isExpanded={isExpanded}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  background-color: #000;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  max-height: 40px;
`

const SearchIcon = styled.i`
  margin-right: 8px;
  color: #fff;
`

const SearchText = styled.input`
  background-color: #000;
  border: none;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  max-width: ${({ isExpanded }) => (isExpanded ? "200px" : "60px")};
  width: ${({ isExpanded }) => (isExpanded ? "200px" : "60px")};
  transition: width 0.3s ease; /* Agrega una transición suave a la propiedad width */
`
