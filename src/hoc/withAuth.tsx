"use client";
import { useRouter } from "next/navigation";
import { JSX, useEffect } from "react";
function withAuth<T extends object>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T> {
  const AuthenticatedComponent: React.FC<T> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem("isLoggedIn");
      if (!isAuthenticated) {
        router.push("/Assignment-5/Login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
}

export default withAuth;
