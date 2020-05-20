import React, { useState } from "react";

const AddUserForm = (props: any) => {
  const initialFormState = {
    id: 1,
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    phonenumber: "",
    gpa: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(user);
        if (!user.firstname || !user.lastname) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>First Name</label>
      <input
        type="text"
        name="firstname"
        value={user.firstname}
        onChange={handleInputChange}
        required
      />
      <label>Last Name</label>
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={handleInputChange}
        required
      />
      <label>Street Number/Name</label>
      <input
        type="text"
        name="street"
        value={user.street}
        onChange={handleInputChange}
        required
      />
      <label>City</label>
      <input
        type="text"
        name="city"
        value={user.city}
        onChange={handleInputChange}
        required
      />
      <label>Phone Number</label>
      <input
        type="text"
        name="phonenumber"
        value={user.phonenumber}
        onChange={handleInputChange}
        required
      />
      <label>GPA</label>
      <input
        type="text"
        name="gpa"
        value={user.gpa}
        onChange={handleInputChange}
        required
      />
      <button>Save</button>
    </form>
  );
};

export default AddUserForm;
