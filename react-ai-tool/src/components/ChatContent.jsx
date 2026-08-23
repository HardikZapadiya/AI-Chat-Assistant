import Answer from "./Answer";
function ChatContent({ error, answer }) {
  return (
    <>
      <div className="flex-1 overflow-y-auto mb-4 px-4">
        {error && <div className="text-red-400 mb-2">{error}</div>}
        {answer ? (
          <div className="text-white">
            <Answer ans={answer} />
          </div>
        ) : (
          !error && (
            <p className="text-zinc-500">Your answer will appear here.</p>
          )
        )}
      </div>
    </>
  );
}

export default ChatContent;
