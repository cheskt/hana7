import type { RefObject } from "react";
import type { LoginHandler } from "../../components/Login";
import { createContext } from "react";

export type LoginUser = {
  id: number;
  name: string;
};

export type Cart = {
  id: number;
  name: string;
  price: number;
};

//loginUser와 cart를 세션에 넣어서 전달
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

//Context가 제공할 기능과 상태타입
export type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  addItem: (name: string, price: number) => void;
  removeItem: (id: number) => void;
  editItem: (item: Cart) => void;
  loginHandlerRef: RefObject<LoginHandler | null>;
};

export const SessionContext = createContext<SessionContextProp | null>(null);
