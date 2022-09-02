import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddCustomer.module.css";

const AddCustomer = () => {
  const [nic, setNic] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const addCUstomerHandler = (event) => {
    event.preventDefault();
    console.log(nic, name, gender, email);
    setNic("");
    setName("");
    setGender("Male");
    setEmail("");
  };

  const selectGenderHandler = (event) => {
    setGender(event.target.value);
  };

  const nicHandler = (event) => {
    setNic(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const clearFields = () => {
    setNic("");
    setName("");
    setGender("Male");
    setEmail("");
  };

  return (
    <div className={`${styles.container} ${styles.input}`}>
      <form onSubmit={addCUstomerHandler}>
        <div className={styles.control}>
          <label htmlFor="nic">NIC</label>
          <input id="nic" type="text" value={nic} onChange={nicHandler} />
        </div>

        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={nameHandler} />
        </div>

        <div className={styles.control}>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            onChange={selectGenderHandler}
            value={gender}
            // placeholder="select"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={emailHandler}
          />
        </div>

        <div className={styles.buttonGroup}>
          <Button type="submit" className={styles.save_button}>
            Save
          </Button>
          <Button className={styles.clear_button} onClick={clearFields}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
