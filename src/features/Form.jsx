import { useState } from "react";
import SuccessComp from "./SuccessComp";
import { useForm } from "react-hook-form";

export default function Form() {
  const [formdata, setFormData] = useState([]);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
    setSuccess(true);
    reset();
  };
  console.log(formdata);

  //main
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Contact Us </h1>
      <div className="input-text">
        <label htmlFor="Fname" className="required">
          First Name
        </label>
        <input
          {...register("firstName", { required: "This field is required" })}
          className="F-name-input"
          type="text"
          id="Fname"
        />
        {errors.firstName && (
          <span className="Fname-warn">{errors.firstName.message}</span>
        )}

        <label htmlFor="Lname" className="required">
          Last Name
        </label>
        <input
          {...register("lastName", { required: "This field is required" })}
          className="L-name-input"
          type="text"
          id="Lname"
        />
        {errors.lastName && (
          <span className="Lname-warn">{errors.lastName.message}</span>
        )}

        <label htmlFor="mail" className="required">
          Email Address
        </label>
        <input
          type="email"
          id="mail"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              // value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            }
          })}
        />
        {errors.email && (
          <span className="email-warn">{errors.email.message}</span>
        )}
      </div>

      <fieldset aria-describedby="query-error">
        <legend className="required">Query Type</legend>
        <div>
          <label>
            <input
              {...register("queryType", {
                required: "Please select a query type",
              })}
              id="general-enquiry"
              type="radio"
              value="general"
            />
            General Enquiry
          </label>
          <label>
            <input
              {...register("queryType", {
                required: "Please select a query type",
              })}
              id="support-enquiry"
              type="radio"
              value="support"
            />
            Support
          </label>
        </div>
        {errors.queryType && (
          <span role="alert" aria-live="polite" id="query-error">
            {errors.queryType.message}
          </span>
        )}
      </fieldset>

      <label className="msg required" htmlFor="msg">
        Message
      </label>
      <br />
      <textarea
        {...register("message", { required: "This field is required" })}
        name="message"
        id="msg"
        rows="10"
      ></textarea>
      {errors.message && <span>{errors.message.message}</span>}
      <label className="box required">
        <input
          type="checkbox"
          {...register("agree", {
            required: "To submit this form, please consent to being contacted",
          })}
        />
        I consent to being contacted by the team
        {errors.agree && (
          <span className="checkbox-warn">{errors.agree.message}</span>
        )}
      </label>
      <input type="submit" value="Submit"/>
      {success && <SuccessComp />}
    </form>
  );
}
