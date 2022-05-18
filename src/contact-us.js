import { DomManipulation } from "./utility";

class FormFieldGenerator {
  static createFormItem(formId, formClass, labelText, inputType) {
    const formItem = DomManipulation.createElementWithClass('div', 'form-item');

    const label = document.createElement('label');
    label.setAttribute('for', formId);
    label.textContent = labelText;

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', formId);
    input.setAttribute('class', formClass);

    formItem.appendChild(label);
    formItem.appendChild(input);

    return formItem;
  }
}

const contactForm = (() => {
  const _formContainer = DomManipulation.createElementWithClass('div', 'contact-us-form-container');
  const _form = DomManipulation.createElementWithClass('form', 'contact-us-form');
  _formContainer.appendChild(_form);
  
  const _firstNameField = FormFieldGenerator.createFormItem('first-name', 'form-field', 'First name:', 'text');
  const _lastNameField = FormFieldGenerator.createFormItem('last-name', 'form-field', 'Last name:', 'text');
  const _emailField = FormFieldGenerator.createFormItem('email', 'form-field', 'Email:', 'email');

  const _feedbackField = DomManipulation.createElementWithClass('div', 'form-item');
  const _feedbackLabel  = document.createElement('label');
  _feedbackLabel.setAttribute('for', 'feedback');
  _feedbackLabel.textContent = 'Feedback:';
  const _feedbackTextArea = DomManipulation.createElementWithClass('textarea', 'form-field');
  _feedbackTextArea.setAttribute('id', 'feedback');
  _feedbackTextArea.setAttribute('rows', '5');
  _feedbackField.appendChild(_feedbackLabel);
  _feedbackField.appendChild(_feedbackTextArea);

  const _submitButton = DomManipulation.createElementWithClass('button', 'form-submit-button');
  _submitButton.textContent = 'Submit';
  _submitButton.setAttribute('type', 'button');

  _form.appendChild(_firstNameField);
  _form.appendChild(_lastNameField);
  _form.appendChild(_emailField);
  _form.appendChild(_feedbackField);
  _form.appendChild(_submitButton);

  const getForm = () => {
    return _formContainer;
  }

  return {
    getForm
  }
})();

const contactUs = (() => {
  const _contactUs = DomManipulation.createElementWithClass('div', 'contact-us');
  const _contactUsWrapper = DomManipulation.createElementWithClass('div', 'wrapper');

  _contactUs.appendChild(_contactUsWrapper);

  const _contactUsText = DomManipulation.createElementWithClass('div', 'contact-us-text');
  _contactUsText.textContent = "Contact us";
  _contactUsWrapper.appendChild(_contactUsText);

  const _contactUsContent = DomManipulation.createElementWithClass('div', 'contact-us-content');
  _contactUsContent.textContent = "Have any questions, concerns, or compliments about our service? Feel free to contact us in person at any of our stores, our through our feedback form."
  _contactUsWrapper.appendChild(_contactUsContent);

  _contactUsWrapper.appendChild(contactForm.getForm());

  const getContactUs = () => {
    return _contactUs;
  }

  return {
    getContactUs,
  };
})();

export { contactUs }