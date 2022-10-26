import * as React from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import "./Poll.scss";
const questions = [];
export default function AllPolls() {
  const [data, setData] = React.useState();
  const { id } = useParams();
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    axios
      .get(`polls/${id}`)
      .then((res) => {
        setData(
          res.data?.questions?.map((el) => {
            questions.push(el);
          })
        );
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении статьи");
      });
  }, []);
  console.log(questions);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);
  };
  function Result() {
    return (
      <div className="result">
        <img src="https://i.pinimg.com/originals/5f/04/75/5f0475089e81138cf8f8c277fd6b408b.gif" />
        <h2>Опрос пройден!</h2>
      </div>
    );
  }
  function Game({ step, question, onClickVariant }) {
    const percentage = Math.round((step / questions.length) * 100);
    return (
      <>
        <div className="progress">
          <div
            style={{ width: `${percentage}%` }}
            className="progress__inner"
          ></div>
        </div>
        <h1>{question?.titleQuestions}</h1>
        <ul>
          {question?.variants.map((text, index) => (
            <li className = "answer"onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <div className="Poll">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result />
      )}
    </div>
  );
}
