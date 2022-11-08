import React from "react";
import { Formik } from "formik";
import InputMask from "react-input-mask";
import { verifyDisableCondition } from "../../helper/Helper";


const Basic = ({ setData }) => {
  return (
    <div className="flex flex-col items-center md:p-10 text-sm font-mono font-bold">
      <Formik
        initialValues={{
          cardholder_name: "",
          card_number: "",
          month: "",
          year: "",
          cvc: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.cardholder_name) {
            errors.cardholder_name = "Can't be blank";
          }
          if (values.month>12) {
            errors.month = "value must be equal or under 12";
          }
          if (!values.month) {
            errors.month = "can't be blank";
          }
          if (values.year<2022) {
            errors.year = "value must be equal or higher than 2022";
          }
          if (values.year>2050) {
            errors.year = "value must be equal or lower than 2050";
          }
          if (!values.year) {
            errors.year = "can't be blank";
          }
          if (!values.cvc) {
            errors.cvc = "can't be blank";
          }
          if (values.cvc.length!=3) {
            errors.cvc = "Three numbers required";
          }
          if (
            !values.card_number ||
            values.card_number === "____ ____ ____ ____"
          ) {
            errors.card_number = "can't be blank";
          }
          if (
            !values.card_number ||
            values.card_number === "____ ____ ____ ____"
          ) {
            errors.card_number = "can't be blank";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setData(values);
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            className="flex flex-col md:py-40 mt-6 gap-4 uppercase text-xs"
            onSubmit={handleSubmit}
          >
            <label className="text-left" htmlFor="">
              cardholder name
            </label>
            <input
              className={`${
                errors.cardholder_name && true ? "border-red-500 border" : ""
              }  h-8 border rounded-md`}
              type="text"
              name="cardholder_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardholder_name}
            />
            <p className="text-xs text-red-500">
              {errors.cardholder_name &&
                touched.cardholder_name &&
                errors.cardholder_name}
            </p>
            <label className="text-left" htmlFor="">
              card number
            </label>
            <InputMask
              className={`${
                errors.card_number && true ? "border-red-500 border" : ""
              } h-8 border rounded-md`}
              mask="9999 9999 9999 9999"
              name="card_number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.card_number}
            />
            <p className="text-xs text-red-500">
              {errors.card_number && touched.card_number && errors.card_number}
            </p>
            <div className="flex justify-between gap-2 items-center">
              <div className="w-32 flex flex-col">
                <label className="pb-2" htmlFor="">
                  exp date (MM/YY)
                </label>
                <div className="flex justify-between flex-wrap">
                  <input
                    className={`${
                      errors.month && true ? "border-red-500 border" : ""
                    } h-8 w-14 border rounded-md`}
                    type="number"
                    name="month"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.month}
                    max={12}
                    min={1}
                  />
                  <input
                    className={`${
                      errors.year && true ? "border-red-500 border" : ""
                    } w-14 border rounded-md`}
                    type="number"
                    name="year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.year}
                    min={2022}
                    max={2050}
                  />
                </div>
              </div>
              <div className="w-18 flex flex-col">
                {" "}
                <label className="pb-2 text-left" htmlFor="">
                  cvc
                </label>
                <input
                  className={`${
                    errors.cvc && true ? "border-red-500 border" : ""
                  } h-8 border rounded-md`}
                  type="text"
                  name="cvc"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cvc}
                />
              </div>
            </div>
            <div className="flex justify-around text-xs text-red-500">
              <div className="text-left">
                <p>{errors.month && touched.month && errors.month}</p>
                <p>{errors.year && touched.year && errors.year}</p>
              </div>
              <div className="">
                <p className="pl-16 text-xs text-right text-red-500">
                  {errors.cvc && touched.cvc && errors.cvc}
                </p>
              </div>
            </div>
            <div className="">
              <button
                className={`w-64 ${verifyDisableCondition(errors,values)?"bg-black":"bg-gray-400 cursor-not-allowed"} text-white`}
                type="submit"
                disabled={isSubmitting}
              >
                Confirm
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
