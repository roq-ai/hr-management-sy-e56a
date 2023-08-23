import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  score: yup.number().integer().nullable(),
  feedback: yup.string().nullable(),
  goals: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  evaluator_id: yup.string().nullable().required(),
});
