import genres from "../data/genres";
export interface Genere {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => ({ data: genres, loading: false, error: null });
export default useGenres;
