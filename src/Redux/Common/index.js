import { STAR_LOADING, STOP_LOADING } from "../Constants";

export function starLoading() {
  return {
    type: STAR_LOADING,
  };
}
export function stopLoading() {
  return {
    type: STOP_LOADING,
  };
}
