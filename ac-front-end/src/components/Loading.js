import { SpinnerCircular } from "spinners-react";

function Loading() {
  return (
    <SpinnerCircular role="status">
      <span className="visually-hidden">Loading...</span>
    </SpinnerCircular>
  );
}

export default Loading;
