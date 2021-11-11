import { Members } from './members';

export interface Churras {
  id: number;
  name: string;
  date: string;
  value: number;
  members: Members[];
}
