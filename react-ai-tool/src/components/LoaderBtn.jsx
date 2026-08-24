import { LoaderCircle } from "lucide-react";

const LoaderBtn = ({ loading, submitHandler, askedQuestion }) => {
  return (
    <>
      <button
        onClick={submitHandler}
        disabled={loading || !askedQuestion.trim()}
        className="px-4 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? <LoaderCircle className="animate-spin size={13}" /> : "Ask"}
      </button>
    </>
  );
};

export default LoaderBtn;
