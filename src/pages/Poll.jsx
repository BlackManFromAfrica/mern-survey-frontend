import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "./../axios";
import React from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
StylesManager.applyTheme("defaultV2");
function SurveyComponent() {
  const [poll, setPoll] = React.useState();
  const survey = new Model(poll);
  const { id } = useParams();
  const userData = useSelector((state) => state.auth.data);
  React.useEffect(() => {
    axios
      .get(`polls/${id}`)
      .then((res) => {
        setPoll(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении опроса");
      });
  }, []);
  survey.sendResultOnPageNext = true;
  

  const storageItemKey = "my-survey";

  function saveSurveyData(survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    poll.results.push({
      username : userData.username,
      result: data
    })
    // window.localStorage.setItem(storageItemKey, JSON.stringify(data));
    // window.localStorage.setItem("poll", JSON.stringify(poll));
  }

  // Save survey results
  survey.onPartialSend.add((survey) => {
    saveSurveyData(survey);
  });
  survey.onComplete.add(async (survey) => {
    saveSurveyData(survey);
    const {data} = await axios.patch(`/polls/${id}`, poll)
  });

  // Restore survey results
  const prevData = window.localStorage.getItem(storageItemKey) || null;
  if (prevData) {
    const data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }
  return <Survey model={survey} />;
}
export default SurveyComponent;
