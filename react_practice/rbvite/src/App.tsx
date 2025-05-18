import { useRef, useState } from "react";
import "./App.css";
import Hello, { type HelloHandler } from "./components/Hello";
import My from "./components/My";
import { SessionProvider } from "./contexts/session/SessionProvider";

export type LoginFn = (id: number, name: string) => void;

function App() {
  const [count, setCount] = useState(0);
  const helloButtonRef = useRef<HTMLButtonElement>(null);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const helloHandlerRef = useRef<HelloHandler>(null);

  const plusCount = () => setCount((c) => c + 1);

  return (
    <SessionProvider>
      <h2>count: {count}</h2>
      <My logoutButtonRef={logoutButtonRef} />
      <Hello
        name={"홍길동"}
        age={33}
        plusCount={plusCount}
        helloButtonRef={helloButtonRef}
        refx={helloHandlerRef}
      >
        반갑습니다!
      </Hello>
      <button onClick={() => helloButtonRef.current?.click()}>
        Click Hello
      </button>
      <button onClick={() => logoutButtonRef.current?.click()}>
        Logout in App
      </button>
      <button onClick={() => console.log(helloHandlerRef.current)}>
        sayHello
      </button>
    </SessionProvider>
  );
}

export default App;
