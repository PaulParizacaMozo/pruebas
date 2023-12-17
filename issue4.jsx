import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";
const User = ({ person }) => {
  console.log("PERSON IN USER => ", person)
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(
    person.followers.includes(user.id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person.id, user))
      : dispatch(followUser(person.id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

User.propTypes = {
  person: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    username: PropTypes.string,
    followers: PropTypes.string,
    followers.includes: PropTypes.string,
    profilePicture: PropTypes.string,
    followers.id: PropTypes.string,
    // Agrega más validaciones según sea necesario
  }),
};

export default User;
