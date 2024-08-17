import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const addAt = (username) => `@${username}`;

const users = [
  {
    id: 1,
    username: "kurttck",
    name: "Kurt Angeles",
    isFollow: true,
  },
  {
    id: 2,
    username: "midudev",
    name: "Midu Dev",
    isFollow: false,
  },
  {
    id: 3,
    name: "Pablo Bayardigan",
    isFollow: false,
  },
];

export function App() {
  return (
    <>
      <div className="container">
        <h1>A quién seguir</h1>
        <section className="App">
          {users.map((user) => {
            const { id, username, name, isFollow } = user;
            return (
              <TwitterFollowCard
                key={id}
                format={addAt}
                username={username}
                name={name}
                initialIsFollow={isFollow}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
