import LoaderBtn from "./LoaderBtn";

const PromptBar = ({
  askedContent,
  handleAskedContent,
  handleKeyDown,
  submitHandler,
  loading,
}) => {
  return (
    <>
      <div className="bg-zinc-800 p-2 w-1/2 mx-auto rounded-4xl border border-zinc-400 flex items-center">
        <input
          type="text"
          value={askedContent}
          placeholder="Ask me anything"
          className="w-full bg-transparent p-3 outline-none"
          onChange={handleAskedContent}
          onKeyDown={handleKeyDown}
        ></input>
        <LoaderBtn
          askedContent={askedContent}
          submitHandler={submitHandler}
          loading={loading}
        />
      </div>
    </>
  );
};

export default PromptBar;
