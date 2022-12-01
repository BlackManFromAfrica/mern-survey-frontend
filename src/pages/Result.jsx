// import React from "react";
import { Model } from "survey-core";
import * as SurveyPDF from "survey-pdf";
// const Result = () => {
//   const survey = new Model(JSON.parse(localStorage.getItem("poll")));
//   function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
//     var options = {
//       fontSize: 14,
//       margins: {
//         left: 10,
//         right: 10,
//         top: 10,
//         bot: 10,
//       },
//       format: [pdfWidth, pdfHeight],
//     };
//     var surveyPDF = new SurveyPDF.SurveyPDF(
//       JSON.parse(localStorage.getItem("poll")),
//       options
//     );
//     surveyPDF.data = surveyModel.data;
//     surveyPDF.save(filename);
//   }
//   function Save() {
//     var pdfWidth = survey.pdfWidth || 210;
//     var pdfHeight = survey.pdfHeight || 297;
//     saveSurveyToPdf("surveyResult.pdf", survey, pdfWidth, pdfHeight);
//   }
//   survey.data = JSON.parse(localStorage.getItem("my-survey"));
//   return (
//     <>
//       <Button onClick={Save} variant="contained">
//         Save to PDF
//       </Button>
//     </>
//   );
// };

// export default Result;

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useParams } from "react-router-dom";
import axios from "./../axios";
import Divider from "@mui/material/Divider";
export const Result = ({}) => {
  const [poll, setPoll] = React.useState();
  const { id } = useParams();
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
  const survey = new Model(poll);
  function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
    var options = {
      fontSize: 14,
      margins: {
        left: 10,
        right: 10,
        top: 10,
        bot: 10,
      },
      format: [pdfWidth, pdfHeight],
    };
    var surveyPDF = new SurveyPDF.SurveyPDF(poll, options);
    surveyPDF.data = surveyModel.data;
    surveyPDF.save(filename);
  }
  function Save(index) {
    var pdfWidth = survey.pdfWidth || 210;
    var pdfHeight = survey.pdfHeight || 297;
    survey.data = poll?.results[index].result;
    saveSurveyToPdf("surveyResult.pdf", survey, pdfWidth, pdfHeight);
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        m: "auto",
        mt: 10,
      }}
      className="rounded-md"
    >
      {poll?.results.map((result, index) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="primary"
                  >
                    {result.username}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    key={index}
                    onClick={() => Save(index)}
                  >
                    Download result
                  </Button>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
};
export default Result;
