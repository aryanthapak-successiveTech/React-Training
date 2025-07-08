import BasicModal from "../Components/Modal";

const ModalPage = () => {
  return (
    <div className="flex-col">
      <p className="text-center">
        Design and implement a reusable Modal component that allows
        customization of its content. Provide controls to open, close, and
        toggle the modal’s visibility. Demonstrate how to use this component to
        display different types of content within a Next.js application.
      </p>
      <BasicModal title="Basic Modal" text="Some Text" />
    </div>
  );
};

export default ModalPage;
