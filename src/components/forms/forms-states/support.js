import { maxLength, minLength, required, email } from '@vuelidate/validators';

export const supportForm = {
  email: {
    id: 'email',
    value: '',
    valid: false,
    validationError: '',
    serverError: ''
  },
  name: {
    id: 'name',
    value: '',
    valid: false,
    validationError: '',
    serverError: ''
  },
  message: {
    id: 'support',
    value: '',
    valid: false,
    validationError: '',
    serverError: ''
  }
}

export const supportValidation = {
  email: {
    value: {
      required,
      email,
      minLength: minLength(4)
    },
  },
  name: {
    value: {
      minLength: minLength(1),
      maxLength: maxLength(32),
    },
  },
  message: {
    value: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(1500),
    },
  },
};

