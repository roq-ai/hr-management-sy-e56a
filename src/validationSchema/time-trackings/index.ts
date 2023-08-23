import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  date: yup.date().required(),
  hours_worked: yup.number().integer().nullable(),
  overtime: yup.number().integer().nullable(),
  breaks: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
