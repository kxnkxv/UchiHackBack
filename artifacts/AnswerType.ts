import { UserType } from "./UserType";
import { Moment } from "moment";

export interface AnswerType {
  user: UserType;
  id: string;
  isRightAnswer: boolean;
  message: string;
  createdAt: Moment;
  comments: CommentType[];
}

export interface CommentType {
  user: UserType;
  id: string;
  createdAt: Moment;
  message: string;
}
