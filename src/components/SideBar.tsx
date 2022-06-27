import { memo, useMemo } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

function SideBarC({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => buttonClickCallback(genre.id)}
            selected={false}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarC, (prevProps, nextProps) =>
  Object.is(prevProps.genres, nextProps.genres)
);
