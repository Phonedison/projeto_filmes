import { TMDB } from "@lorenzopant/tmdb";
import type { Movie } from "tmdb-ts";

const tmdb = new TMDB(import.meta.env.VITE_TMDB_API_KEY!, {
  language: "pt-BR",
  region: "BR",
});

export const buscarFilme = async (nome: string) => {
  try {
    const resultado = await tmdb.search.movies({
      query: nome,
      include_adult: false,
    });

    return resultado.results;
  } catch (error) {
    console.log("Filme não encontrado", error);
    return null;
  }
};

export const listGenres = async () => {
  const { genres } = await tmdb.genres.movie_list({ language: "pt-BR" });
  return genres;
};

export const getTopMovies = async (): Promise<Movie[]> => {
  try {
    const { results } = await tmdb.movie_lists.popular({
      language: "pt-BR",
      region: "BR",
    });

    return results.slice(0, 10) as Movie[];
  } catch (error) {
    console.error("Erro ao carregar os filmes populares:", error);
    return [];
  }
};
