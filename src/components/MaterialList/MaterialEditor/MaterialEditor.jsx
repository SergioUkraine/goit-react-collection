import { Component } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  StyledInput,
  Label,
  ErrorMsg,
  ControlBar,
  SubmitButton,
  CancelButton,
} from './MaterialEditor.styled';

const schema = yup.object().shape({
  title: yup.string().required(), //.min(2)
  link: yup.string().required(), //.min(6).max(10)
});

class MaterialEditor extends Component {
  state = { id: null, title: null };

  handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { onCancel, onApply, material } = this.props;
    const updatedMaterial = { id: material.id, ...values };
    onApply(updatedMaterial);
    setSubmitting(false);
    resetForm();
    onCancel();
  };

  handleCancelClick = () => {
    this.props.onCancel();
  };

  render() {
    const { material } = this.props;
    return (
      <Formik
        initialValues={{ title: material.title, link: material.link }}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
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
            <ControlBar>
              <CancelButton
                type="button"
                disabled={isSubmitting}
                onClick={this.handleCancelClick}
              >
                Cancel
              </CancelButton>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Apply
              </SubmitButton>
            </ControlBar>
          </StyledForm>
        )}
      </Formik>
    );
  }
}

export default MaterialEditor;
