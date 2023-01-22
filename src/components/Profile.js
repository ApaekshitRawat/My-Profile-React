import photo from "../images/photo.JPG";
const Profile = () => {
  return (
    <div>
      <img src={photo} className="profilePicture" alt="profile-picture" />
    </div>
  );
};
export default Profile;
