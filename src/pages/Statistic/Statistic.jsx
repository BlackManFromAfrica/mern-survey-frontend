import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./Statistic.scss";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: 400,
  width: 400,
  fontSize: 30,
  boxShadow: '1px 1px 10px #a18cd1',
  borderRadius: '50%',
  color: '#a18cd1',
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

export default function Statistic() {
  return (
    <div className="stack-animation">
      <Stack direction="row" spacing={20} marginTop={12}>
        <Item>
          <h3>Registered users</h3>
          <p id="count">666</p>
        </Item>
        <Item>
          <h3>Polls created</h3>
          <p id="count">666</p>
        </Item>
        <Item>
          <h3>Online now</h3>
          <p id="count">666</p>
        </Item>
      </Stack>
    </div>
  );
}
