"use client"
import withAuth from "@/hoc/withAuth";

const Page = () => {
  return (
    <>
     <p className="text-center">
      Create a higher-order component (HOC) named withAuth that restricts access
      to a component only to authenticated users. Implement this HOC on a sample
      component and demonstrate how it protects routes or pages in a Next.js
      application.
    </p>

    </>
   
  );
};

export default withAuth(Page);
