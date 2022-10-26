import React from "react";
import "./Constructor.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import PollCreated from "../../components/PollCreated/PollCreated";
import TextField from "@mui/material/TextField";
import FormControlLabel from "../../components/FormControl/FormControlLabel";

const pollsCreated = [{}, {}, {}, {}];
const Constructor = () => {
  return (
    <div class="containerConst">
      <div class="constructor">
        <div className="created">
          <svg
            className="add"
            width="60"
            height="60"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 9V6C9 5.44772 9.44772 5 10 5V5C10.5523 5 11 5.44772 11 6V9H14C14.5523 9 15 9.44772 15 10V10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15V15C9.44772 15 9 14.5523 9 14V11H6C5.44772 11 5 10.5523 5 10V10C5 9.44772 5.44772 9 6 9H9ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18Z"
              fill="#a18cd1"
            />
          </svg>
          <div className="pollsCreated" >
            <Box>
              <Grid container spacing={5}  zeroMinWidth>
                {pollsCreated.map((pollsCreated, i) => {
                  return (
                    <Grid key={i} item>
                      <PollCreated {...pollsCreated} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </div>
        </div>
        <div className="creator">
          <TextField
            color="secondary"
            size="small"
            label="Title"
            variant="standard"
            style={{ width: "40%", marginBottom: 30 }}
            className = "anim"
          />
          <TextField
            label="Description"
            color="secondary"
            size="small"
            style={{ width: "40%", marginBottom: 30 }}
            variant="standard"
            className= "anim2"
          />
          <FormControlLabel />
        </div>
      </div>
    </div>
  );
};

export default Constructor;
