"use client";
import withLogger from "@/hoc/withLogger";


const Page = () => {
  return (
    <div>
      <p className="text-center">
        Build a higher-order component (HOC) named withLogger that logs
        component lifecycle events like mounting, unmounting, and updating.
        Apply this HOC to a component and ensure the logs appear in the browser
        console.
      </p>
    </div>
  );
};

export default withLogger(Page);
