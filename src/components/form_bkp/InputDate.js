import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import { Field } from 'formik'
import es from "date-fns/locale/es";
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers";

const InputDate = (props) => {
  const { label, name, required, ...rest } = props

  const validateFieldDate = value => {
    let errors
    if (!value) {
      errors = `El campo ${name} es obligatorio`
    }
    return errors
  }


  return (

    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es} >
      <Field name={name} validate={validateFieldDate}>
        {({ form, field }) => {
          const validareRequired = form.errors[name] && form.touched[name] ? "error-field" : form.submitCount >= 1 ? "success-field" : null
          const { setFieldValue } = form
          const { value } = field
          return (
            <div className={required && validareRequired}>
            <DatePicker
              htmlFor={name}
              inputVariant="outlined"
              label={label}
              openTo="year"
              format="dd/MM/yyyy"
              views={["year", "month", "date"]}
              id={name}
              disableFuture
              {...field}
              {...rest}
              value={value}
              onChange={val => setFieldValue(name, val)}
              error={form.submitCount >= 1 && form.errors[name] ? form.touched[name] : null}
              helperText={form.errors[name] && form.touched[name] && form.submitCount >= 1 ? form.errors[name] : null}
            />
            </div>
          )
        }}
      </Field>
    </MuiPickersUtilsProvider>

  );
};
export default InputDate;
