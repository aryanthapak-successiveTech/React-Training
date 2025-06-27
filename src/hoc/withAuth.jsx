"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
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
