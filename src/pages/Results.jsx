import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchPolls } from "../redux/slices/polls.js";
import { selectIsAuth } from "../redux/slices/auth";
import { Model } from "survey-core";
import * as SurveyPDF from "survey-pdf";
import PollCardResult from "../components/PollCardResult";

const Results = () => {
  const { polls } = useSelector((state) => state.polls);
  const userData = useSelector((state) => state.auth.data);

  const isAuth = useSelector(selectIsAuth);
  const filteredItems = polls.items.filter(
    (obj) => userData?._id === obj.user._id
  );
  console.log(filteredItems)
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {filteredItems.length!=0 ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4">
            {filteredItems.map((obj) => (
              <PollCardResult
                id={obj._id}
                title={obj.title}
                descriptionText={obj.description}
                logo={obj.logo}
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                tags={["react", "fun", "typescript"]}
                isEditable={userData?._id === obj.user._id}
              />
            ))}
          </div>
        </>
      ) : (
        <><h1 className = 'text-5xl mx-auto w-fit	mt-40'>You don't have polls</h1></>
      )}
    </>
  );
};

export default Results;
