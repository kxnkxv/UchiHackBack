import { QuestionType } from "../types/QuestionType";
import { users } from "./users";
import { UserType } from "../types/UserType";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

export const questionsList: QuestionType[] = [
  {
    id: "111",
    title: "Вопрос 1",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    theme: "russian",
    subTheme: "",
    createdAt: moment(),
    user: users.find(({ id }) => id === "111") as UserType,
    cost: 0,
    status: "Не решено",
    time: 0,
    urgently: false,
  },
  {
    id: "222",
    title: "Вопрос 2",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    theme: "art",
    subTheme: "",
    createdAt: moment(),
    user: users.find(({ id }) => id === "222") as UserType,
    cost: 0,
    status: "Не решено",
    time: 0,
    urgently: true,
  },
  {
    id: "333",
    title: "Вопрос 3",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    theme: "physic",
    subTheme: "",
    createdAt: moment(),
    user: users.find(({ id }) => id === "333") as UserType,
    cost: 0,
    status: "Не решено",
    time: 0,
    urgently: false,
  },
  {
    id: "444",
    title: "Вопрос 4",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    theme: "informatics",
    subTheme: "",
    createdAt: moment(),
    user: users.find(({ id }) => id === "444") as UserType,
    cost: 0,
    status: "Не решено",
    time: 0,
    urgently: true,
  },
  {
    id: "555",
    title: "Вопрос 5",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    theme: "literature",
    subTheme: "",
    createdAt: moment(),
    user: users.find(({ id }) => id === "555") as UserType,
    cost: 0,
    status: "Не решено",
    time: 0,
    urgently: false,
  },
  {
    id: "666",
    title: "Вопрос 6",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
    theme: "math",
    subTheme: "",
    createdAt: moment(),
    user: users.find(({ id }) => id === "666") as UserType,
    cost: 0,
    status: "Не решено",
    time: 0,
    urgently: true,
  },
];
