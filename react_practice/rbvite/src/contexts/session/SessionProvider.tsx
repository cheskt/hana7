import { createRef, useCallback, useState, type ReactNode } from "react";
import type { LoginHandler } from "../../components/Login";
import {
  SessionContext,
  type Cart,
  type Session,
  type SessionContextProp,
} from "./SessionContext";

const SampleSession: Session = {
  //loginUser: null;
  loginUser: { id: 1, name: "Hong" },
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const loginHandlerRef = createRef<LoginHandler | null>();

  const login = useCallback(
    (id: number, name: string) => {
      const handler = loginHandlerRef.current;
      if (!handler) return;

      const { getName, validate, str, focusId } = handler;
      console.log("login>>", getName(), str);
      if (validate()) {
        setSession({ ...session, loginUser: { id, name } });
      } else {
        focusId();
      }
    },
    [session, loginHandlerRef]
  );

  const logout = useCallback(() => {
    setSession({ ...session, loginUser: null });
  }, [session]);

  const removeItem = useCallback(
    (id: number) => {
      setSession({
        ...session,
        cart: session.cart.filter((item) => item.id !== id),
      });
    },
    [session]
  );

  const addItem = useCallback(
    (name: string, price: number) => {
      const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      setSession({ ...session, cart: [...session.cart, { id, name, price }] });
    },
    [session]
  );

  const editItem = useCallback(
    (item: Cart) => {
      setSession({
        ...session,
        cart: session.cart.map((i) => (i.id == item.id ? item : i)),
      });
    },
    [session]
  );

  const value: SessionContextProp = {
    session,
    login,
    logout,
    addItem,
    editItem,
    removeItem,
    loginHandlerRef,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
