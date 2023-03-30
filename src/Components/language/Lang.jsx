import { useState, useEffect } from "react";
// import ToDoList from "./Components/ToDoList/ToDoList";
import React from "react";
import { useTranslation } from "react-i18next";

const Lang = () => {
  const { t, i18n } = useTranslation();

  const handleChangelanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  return (
    <>
      {/* <ToDoList /> */}

      <button onClick={() => handleChangelanguage("eng")}>Eng</button>
      <button onClick={() => handleChangelanguage("ru")}>Ru</button>

      <h2>{t("text")}</h2>
    </>
  );
};

export default Lang;
