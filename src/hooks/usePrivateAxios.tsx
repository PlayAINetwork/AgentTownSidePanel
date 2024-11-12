import { useEffect } from "react";
import Cookies from "js-cookie";
import { axiosPrivate } from "../axios";
import { useAppCtx } from "../contexts/app.context";
const useAxiosPrivate = () => {
  const jwt = Cookies.get("token");
  const { disconnectUser } = useAppCtx();
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${jwt}`;
        }
        return config;
      },
      (error: any) => {
        Promise.reject(error);
      }
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response: any) => response,
      async (error: any) => {
        const prevRequest = error?.config;
        if ([401].includes(error?.response?.status) && !prevRequest?.sent) {
          console.log("token expired");
          disconnectUser();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [jwt]);

  return axiosPrivate;
};

export default useAxiosPrivate;
