import LoaderBtn from "./LoaderBtn";

const PromptBar = ({
  askedQuestion,
  handleAskedQuestion,
  handleKeyDown,
  submitHandler,
  loading,
}) => {
  return (
    <>
      <div className="bg-zinc-800 p-2 w-1/2 h-14 mx-auto rounded-4xl border border-zinc-400 flex items-center">
        <input
          type="text"
          value={askedQuestion}
          placeholder="Ask me anything"
          className="w-full bg-transparent p-3 outline-none"
          onChange={handleAskedQuestion}
          onKeyDown={handleKeyDown}
        ></input>
        <LoaderBtn
          askedQuestion={askedQuestion}
          submitHandler={submitHandler}
          loading={loading}
        />
      </div>
    </>
  );
};

export default PromptBar;
