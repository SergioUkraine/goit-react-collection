import * as yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  StyledInput,
  Label,
  ErrorMsg,
  SubmitButton,
} from './MaterialCreateForm.styled';

const schema = yup.object().shape({
  title: yup.string().required(), //.min(2)
  link: yup.string().required(), //.min(6).max(10)
});

const MaterialCreateForm = ({ onSubmit }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Label>
            Описание <StyledInput name="title" type="text"></StyledInput>
            <ErrorMsg name="title" component="div" />
          </Label>

          <Label>
            Ссылка <StyledInput name="link" type="text"></StyledInput>
            <ErrorMsg name="link" component="div" />
          </Label>
          <SubmitButton type="submit" disabled={isSubmitting}>
            Добавить материал
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default MaterialCreateForm;
