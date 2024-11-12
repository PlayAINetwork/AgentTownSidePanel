import { useAppCtx } from "../contexts/app.context";

const useAuthHeader = () => {
  const { token } = useAppCtx();

  // const token =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDY5NjM3MDAsInN1YiI6IjB4OWYwYjgzY2Y1ODJGNUQ2NDVDMmIxRmQ3QmNmRTIxRmMzOEZhZjg4MiIsImV4cCI6MTcwNzA1MDEwMH0.R93xwdyCZraUeaA3QfZeVQN2ltKHXgySH-Tsg4XUiIE";

  return token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};
};

export default useAuthHeader;
