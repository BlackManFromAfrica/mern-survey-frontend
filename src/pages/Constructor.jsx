import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth";
import { Navigate, useNavigate } from "react-router-dom";
import "survey-core/defaultV2.min.css";
import { Button } from "antd";
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import axios from "../axios";
export function Constructor() {
  const navigate = useNavigate()
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true,
  };
  const creator = new SurveyCreator(creatorOptions);
  creator.saveSurveyFunc = (saveNo, callback) => {
    callback(saveNo, true);
  };
  const onSubmit = async () => {
    try {
      await axios.post('/polls', creator.JSON);
      navigate(`/`)
    } catch (error) {
      console.warn(error);
      alert('Ошибка при создании опроса')
    }
  };
  return (
    <>
      <SurveyCreatorComponent creator={creator} />
  
      <Button onClick={onSubmit} className="absolute w-full bg-white " style={{top: '101.5%'}}>
        Опубликовать
      </Button>
    </>
  );
}

export default Constructor;
