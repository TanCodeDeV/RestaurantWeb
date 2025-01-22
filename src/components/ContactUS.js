import User from "./User";
import UserClass from "./UserClass";
const ContactUS = () => {
  return (
    <div className="container place-content-center border-2 border-pink-700 m-24 p-6 w-[50rem] ml-[25rem]">
      <h1>Coooollllll!!😎</h1>
      <ul>
        <li>Phone no: +91-9405889363</li>
        <li>Email: tanMe@gmail.com</li>
        <User name={"Tanmayi Bhave"} add={"Pune"} email={"tanmayi@gmail.com"} />

        <UserClass name={"Joker"} add={"Pune"} email={"joker@234"} />
      </ul>
    </div>
  );
};

export default ContactUS;
