import * as yup from 'yup';
import { translatedErrors } from '@strapi/helper-plugin';

const schema = yup.object().shape({
  name: yup.string(translatedErrors.string).required(translatedErrors.required),
  type: yup
    .string(translatedErrors.string)
    .oneOf(['read-only', 'full-access', 'custom'])
    .required(translatedErrors.required),
  description: yup.string().nullable(),
  lifespan: yup.number().integer().min(1).nullable().defined(translatedErrors.required),
});

export default schema;
