import profileImage from "../assets/profile.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      />

      <h2>Dhayapradeep</h2>
      <p className="profile-role">React Developer</p>

      <button className="profile-button">
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;