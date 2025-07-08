"use client";
import { useRouter } from "next/navigation";
import { JSX, useEffect } from "react";

function withAuth<T extends JSX.IntrinsicAttributes>(WrappedComponent:React.ComponentType<T >) {
  return function AuthenticatedComponent(props:T){
    const router = useRouter();
    useEffect(() => {
      const isAuthenticated = localStorage.getItem("isLoggedIn");
      if (!isAuthenticated) {
        router.push("/Assignment-5/Login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
