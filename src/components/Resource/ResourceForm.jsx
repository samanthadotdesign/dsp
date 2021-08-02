import React from 'react';
import {
  Formik, Form, useField,
} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  Input, Label, Error, Submit,
} from './styles.js';

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {label}
      :
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  );
};

export default function ResourceForm({
  resourceSkills, setResourceSkills, skillId, setResourceForm,
}) {
  const schema = Yup.object().shape({
    title: Yup.string().required('Required field'),
    link: Yup.string().required('Required field'),
  });

  console.log('******* DEFAULT RESOURCE SKILLS');
  console.log(resourceSkills);

  const handleAddResource = (values) => {
    const { title, link } = values;
    console.log('****** inside handle add resource');

    axios.post('/add-resource', { title, link, skillId }).then((result) => {
      /* resourceSkills = {
        1: [ { name ... }, {}, {}],
        2: [ { name ... }, {}, {}],
      }
      resourceSkills[1] = [{name...},{},{}]
      resourceSkills[10] -> key 10 doesn't even exist
      */
      if (resourceSkills[skillId]) {
        resourceSkills[skillId].push({ name: title, link });
      } else {
        resourceSkills[skillId] = [{ name: title, link }];
      }
      setResourceSkills({ ...resourceSkills });
      setResourceForm(false);
    });
  };

  const handleCancelForm = () => {
    setResourceForm(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          link: '',
        }}
        onSubmit={(values) => handleAddResource(values)}
        validationSchema={schema}
      >
        {() => (
          <Form>
            <InputComponent name="title" type="text" label="Title" autoComplete="off" />
            <InputComponent name="link" type="text" label="Link" autoComplete="off" />
            <Submit type="submit">Submit</Submit>
            <button type="button" onClick={handleCancelForm}>Cancel</button>
          </Form>
        )}
      </Formik>
    </>
  );
}