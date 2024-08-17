import { useState } from "react";

export function TwitterFollowCard({
  format,
  username = "unknown",
  name,
  initialIsFollow,
}) {
  const [isFollow, setIsFollow] = useState(initialIsFollow);

  const text = isFollow ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollow
    ? "tw-followCard-button is-follow"
    : " tw-followCard-button";

  const handleClick = () => {
    setIsFollow(!isFollow);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/github/${username}`}
          alt="Kurt"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span>{format(username)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
