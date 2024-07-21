import { required, email, minLength } from '@vuelidate/validators';

export const emailForm = {
  email: {
    id: 'email',
    value: '',
    valid: false,
    validationError: '',
    serverError: ''
  },
}

export const emailValidation = {
  email: {
    value: {
      required,
      email,
      minLength: minLength(4)
    },
  },
};
