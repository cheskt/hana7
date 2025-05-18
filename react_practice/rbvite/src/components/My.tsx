import Profile from "./Profile";
import Item from "./Item";
import { useState, type RefObject } from "react";
import { useSession } from "../contexts/session/useSession";
import Login from "./Login";

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

export default function My({ logoutButtonRef }: Props) {
  const {
    session: { loginUser, cart },
    login,
    logout,
    addItem,
    removeItem,
    editItem,
    loginHandlerRef,
  } = useSession();

  const [isAdding, setAdding] = useState(false);
  const toggleAdding = () => setAdding(!isAdding);

  return (
    <>
      {loginUser ? (
        <Profile
          loginUser={loginUser}
          logout={logout}
          logoutButtonRef={logoutButtonRef}
        />
      ) : (
        <Login login={login} loginHandlerRef={loginHandlerRef} />
      )}

      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <Item
                item={item}
                removeItem={removeItem}
                addItem={addItem}
                editItem={editItem}
              />
            </li>
          ))}
          {isAdding ? (
            <li>
              <Item
                item={{ id: 0, name: "", price: 3000 }}
                removeItem={removeItem}
                addItem={addItem}
                editItem={editItem}
                toggleAdding={toggleAdding}
              />
            </li>
          ) : (
            <button onClick={() => setAdding(true)}>ADD</button>
          )}
        </ul>
      </div>
    </>
  );
}
