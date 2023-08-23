import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  date: any;
  score?: number;
  feedback?: string;
  goals?: string;
  user_id: string;
  evaluator_id: string;
  created_at?: any;
  updated_at?: any;

  user_performance_evaluation_user_idTouser?: UserInterface;
  user_performance_evaluation_evaluator_idTouser?: UserInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  feedback?: string;
  goals?: string;
  user_id?: string;
  evaluator_id?: string;
}
