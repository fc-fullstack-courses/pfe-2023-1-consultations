import { Field, Form, Formik } from 'formik';
import React, { useReducer } from 'react';

const initialValues = {
  test: 'asdsdsdas',
  gender : 'male'
}

const initialState = undefined;


function reducer (state, action) {

  console.log(action);

  return state;
}

const FormExample = () => {

  const [state, dispatch ] = useReducer(reducer, initialState);

  function onSubmit (values, formikBag) {

    dispatch({
      type: 'FORM_SUBMIT',
      payload: {
        gender: values.gender,
        secret: values.secret
      }
    });
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field type="radio" name="gender" value={'male'} />
        <Field type="radio" name="gender" value={'female'} />
        <button type="submit">Enter</button>
      </Form>
    </Formik>
  );
}

export default FormExample;
