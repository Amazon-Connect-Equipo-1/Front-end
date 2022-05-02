import Card from "../UI/Card";
import "../../styles/UserType/UserTypeForm.css";

const UserTypeForm = (props) => {
  return (
    <Card className="utf-main-container">
      <div className="utf-container ">
        <form className="utf-form">
          <p className="utf-form-title">Select user type:</p>

          <button className="utf-button">Agent</button>

          <button className="utf-button">Client</button>
        </form>
      </div>
    </Card>
  );
};

export default UserTypeForm;
