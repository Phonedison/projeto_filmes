import { Banner } from "./components/section/banner_movies";
import { ListMovies } from "./components/section/list_movies";
import { Trends } from "./components/section/trends_movies";

export function App() {
  return (
    <>
      <Banner />
      <Trends />
      <ListMovies />
    </>
  );
}
