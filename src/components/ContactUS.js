import User from "./User";
import UserClass from "./UserClass";
const ContactUS = () => {
  return (
    <div>
      <h1>Need a cool Website like this Contact me</h1>
      <ul>
        <li>Phone no: +91-9405889363</li>
        <li>Email: tanMe@gmail.com</li>
        <User name={"Tanmayi Bhave"} add={"Pune"} email={"TanR@gmail.com"} />

        <UserClass name={"Joker"} add={"Pune"} email={"joker@234"} />
      </ul>
    </div>
  );
};

export default ContactUS;
