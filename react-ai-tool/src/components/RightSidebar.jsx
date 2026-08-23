import { useState } from "react";
import { URL, API_KEY } from "../constants";
import PromptBar from "./PromptBar";
// import ChatContent from "./ChatContent";
import Answer from "./Answer";

const RightSidebar = () => {
  const [askedContent, setAskedContent] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAskedContent = (event) => {
    setAskedContent(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  const submitHandler = async () => {
    if (!askedContent.trim() || loading) return;

    setLoading(true);
    setError("");

    // for groq :
    const payload = {
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: askedContent }],
    };

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      let ans = data?.choices?.[0]?.message?.content;

      console.log(ans);
      setAnswer(ans || "No response received.");
    } catch (err) {
      setError("Failed to reach the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="col-span-4 flex flex-col h-screen p-6">
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
        <PromptBar
          askedContent={askedContent}
          handleAskedContent={handleAskedContent}
          handleKeyDown={handleKeyDown}
          submitHandler={submitHandler}
          loading={loading}
        />
      </div>
    </>
  );
};

export default RightSidebar;
