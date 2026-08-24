import { useState } from "react";
import { URL, API_KEY } from "../constants";
import PromptBar from "./PromptBar";
import Answer from "./Answer";

const RightSidebar = () => {
  const [askedQuestion, setAskedQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [recentHistory, setRecentHistory] = useState([]);

  const handleAskedQuestion = (event) => {
    setAskedQuestion(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  const submitHandler = async () => {
    if (!askedQuestion.trim() || loading) return;

    const currentQuestion = askedQuestion;
    const messageId = Date.now();

    setLoading(true);
    setError("");

    //shows Question immediately
    setAnswer((prev) => [
      ...prev,
      { id: messageId, question: currentQuestion, answer: "" },
    ]);
    setAskedQuestion("");

    // for groq :
    const payload = {
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: currentQuestion }],
    };
 
    //local Storage of Question-History 
    if (localStorage.getItem("history")) {
      let history = JSON.parse(localStorage.getItem("history"))
      history=[askedQuestion,...history]
      localStorage.setItem("history", JSON.stringify(history));
    } else {
      localStorage.setItem("history", JSON.stringify([askedQuestion]));
    }

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

      if (!res.ok) {
        console.error("Groq AI API Error : ", data.error.message);
      }

      const result = data?.choices?.[0]?.message?.content;

      if (!result) {
        throw new Error(data.error.message);
      }

      console.log("AI Response : ", result);

      setAnswer((prev) => {
        return prev.map((item) =>
          item.id === messageId ? { ...item, answer: result } : item,
        );
      });
    } catch (error) {
      setError(`Failed to reach the server :: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="col-span-4 flex flex-col h-screen p-6">
        <div className="flex-1 overflow-y-auto mb-4 px-4 text-white">
          {error && <div className="text-red-400 mb-2">{error}</div>}
          {answer.length > 0
            ? answer.map((item) => (
                <Answer
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))
            : !error && (
                <p className="text-zinc-500">Your answer will appear here.</p>
              )}
        </div>
        <PromptBar
          askedQuestion={askedQuestion}
          handleAskedQuestion={handleAskedQuestion}
          handleKeyDown={handleKeyDown}
          submitHandler={submitHandler}
          loading={loading}
        />
      </div>
    </>
  );
};

export default RightSidebar;
