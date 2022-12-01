import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DeleteForever } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { fetchRemovePoll } from "../redux/slices/polls";
export const PollCard = ({
  id,
  title,
  createdAt,
  logo,
  user,
  viewsCount,
  isLoading,
  descriptionText,
  isEditable,
  avatarUrl,
}) => {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(fetchRemovePoll(id));
  };
  if (isLoading) {
    return <></>;
  }
  return (
    <div class=" min-h-screen bg-gray-100 flex justify-center items-center ">
      <div class="pb-4 w-100 animate__animated animate__fadeInUp max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <span class="text-black text-xs font-bold rounded-lg  inline-block mt-4 ml-4 py-1.5 px-4">
            {title}
          </span>
          <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 hover:text-gray-900 transition duration-100">
            {descriptionText}
          </h1>
        </div>
        <img class="w-full " src={logo} alt="" />
        <div class="flex-col p-4 justify-between">
          <div class="flex items-center space-x-2">
            {user?.avatarUrl ? (
              <img class="w-10 h-10 rounded-full" src={`${user?.avatarUrl}`} />
            ) : (
              <AccountCircleIcon />
            )}
            {/* <img class="w-10 rounded-full" src={`${user?.avatarUrl}`}/> */}
            <h2 class="text-gray-800 font-bold cursor-pointer">
              {user?.username}
            </h2>
          </div>

          <div class="flex space-x-1 items-center justify-between">
            <span>{createdAt.slice(0, createdAt.indexOf("T"))}</span>
            <div>
              <span className="ml-20">{viewsCount}</span>
              <VisibilityIcon />
            </div>
          </div>
        </div>
        <NavLink to={`/polls/${id}`}>
          <button class="ml-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Take
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PollCard;
