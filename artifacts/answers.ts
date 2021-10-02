import { AnswerType } from "../types/AnswerType";
import { users } from "./users";
import { UserType } from "../types/UserType";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

export const answers: AnswerType[] = [
  {
    id: "111",
    user: users.find(({ id }) => id === "111") as UserType,
    isRightAnswer: false,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    createdAt: moment(),
    comments: [],
  },
  {
    id: "222",
    user: users.find(({ id }) => id === "222") as UserType,
    isRightAnswer: true,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    createdAt: moment(),
    comments: [
      {
        user: users.find(({ id }) => id === "555") as UserType,
        id: "555",
        createdAt: moment(),
        message: "Плохой ответ",
      },
      {
        user: users.find(({ id }) => id === "666") as UserType,
        id: "555",
        createdAt: moment(),
        message: "Оооочень, плохой ответ",
      },
    ],
  },
  {
    id: "333",
    user: users.find(({ id }) => id === "333") as UserType,
    isRightAnswer: false,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    createdAt: moment(),
    comments: [],
  },
  {
    id: "444",
    user: users.find(({ id }) => id === "444") as UserType,
    isRightAnswer: false,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    createdAt: moment(),
    comments: [],
  },
];
