import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../actions/gamesAction";
import { fadeIn } from "../animations";

export const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };
  const submitSearchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form>
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearchHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.7rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 10px;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    background: #ff7676;
    cursor: pointer;
    outline: none;
    padding: 0.7rem 2rem;
    border-radius: 10px;
    margin-left: 15px;
    color: #fff;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 5px;
  }
`;
const Search = styled(motion.div)``;
