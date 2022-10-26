import PollCard from "../../components/PollCard/PollCard.jsx";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolls } from "../../redux/slices/polls.js";

export default function AllPolls() {
  const dispatch = useDispatch();
  const { polls } = useSelector((state) => state.polls);
  const isPollsLoading = polls.status === "loading";
  React.useEffect(() => {
    dispatch(fetchPolls());
  }, []);

  return (
    <Box p={15}>
      <Grid
        container
        spacing={5}
        style={{
          marginLeft: 100,
        }}
      >
        {(isPollsLoading ? [...Array()] : polls.items).map((obj, index) =>
          isPollsLoading ? (
            <PollCard key={index} isLoading={true} />
          ) : (
            <PollCard
              id={obj._id}
              title={obj.title}
              descriptionText={obj.description}
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={3}
              tags={["react", "fun", "typescript"]}
              isFullPost
            />
          )
        )}
      </Grid>
    </Box>
  );
}
