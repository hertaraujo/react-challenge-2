import { useState, useEffect } from "react";

import "../styles/sidebar.scss";

import { api } from "../services/api";

import { GenreResponseProps } from "../@types/types";

import { Button } from "./Button";

export function SideBar({
  selectedGenreId,
  handleClickButton,
}: {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
