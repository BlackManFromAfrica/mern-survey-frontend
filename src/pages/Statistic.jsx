import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolls } from "../redux/slices/polls.js";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: 400,
  width: 400,
  fontSize: 30,
  boxShadow: "1px 1px 10px #a18cd1",
  borderRadius: "50%",
  color: "#a18cd1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

export default function Statistic() {
  const dispatch = useDispatch();
  const { polls } = useSelector((state) => state.polls);
  const isPollsLoading = polls.status === "loading";
  React.useEffect(() => {
    dispatch(fetchPolls());
  }, []);

  if (!isPollsLoading) {
  }
  return (
    <section className="animate__animated animate__fade w-1/2 mx-auto mt-14 rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-black sm:text-4xl animate__animated animate__fadeInUp">
            Real time website statistics
          </h2>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="animate__delay-2s animate__animated animate__fadeInLeft flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">*</dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                666
              </dd>
            </div>

            <div class="animate__delay-1s animate__animated animate__fadeInUp flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Created polls
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {polls.items.length}
              </dd>
            </div>

            <div class="animate__delay-3s animate__animated animate__fadeInRight flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">*</dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                666
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
