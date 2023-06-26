import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  registrationId: string;
  password: string;
}

function StudentLogin() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ registrationId, password }) => {
    console.log(registrationId, password);
  });

  return (
    <div>
      <h2>Log in as a Student</h2>
      <p>
        Use the Registration id and password <br /> provided by your teacher to
        log in
      </p>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>
              <input
                {...register("registrationId", {
                  required: true,
                  minLength: 10,
                  maxLength: 20,
                })} 
                name="registrationId"
                placeholder="Registration Id"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                {...register("password", { required: true })} 
                name="password"
                placeholder="Password"
                type="password"
              />
            </label>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      <p>You can change the password later.</p>
    </div>
  );
}

export default StudentLogin;
