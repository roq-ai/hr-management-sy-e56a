import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  days_taken: yup.number().integer().nullable(),
  days_left: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
