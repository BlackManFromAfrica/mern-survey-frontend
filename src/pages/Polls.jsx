import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolls } from "../redux/slices/polls.js";
import PollCard from "../components/PollCard";
export default function AllPolls() {
  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const { polls } = useSelector((state) => state.polls);
  const isPollsLoading = polls.status === "loading";
  React.useEffect(() => {
    dispatch(fetchPolls());
  }, []);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4">
      {(isPollsLoading ? [...Array()] : polls.items).map((obj, index) =>
        isPollsLoading ? (
          <PollCard key={index} isLoading={true} />
        ) : (
          <PollCard
            id={obj._id}
            title={obj.title}
            descriptionText={obj.description}
            createdAt={obj.createdAt}
            viewsCount={obj.viewsCount}
            commentsCount={3}
            user = {obj.user}
            logo = {obj.logo}
          />
        )
      )}
    </div>
  );
}
