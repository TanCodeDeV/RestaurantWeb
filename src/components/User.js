const User = ({ name, add, email }) => {
  return (
    <div className="user-contact  place-content-center border-2 border-pink-400 p-4 m-4">
      <h4>User From Functional Component</h4>
      <h5>Name: {name}</h5>
      <h5>Address:{add}</h5>
      <h5>Email: {email}</h5>
    </div>
  );
};

export default User;
