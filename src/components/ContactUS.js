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

        <UserClass
          name={"Neeraj Ranade"}
          add={"Pune/Austrelia"}
          email={"NeerajHRanade@gmail.com"}
        />
      </ul>
    </div>
  );
};

export default ContactUS;
