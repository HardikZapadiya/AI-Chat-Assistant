import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Answer({ question, answer }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="space-y-3">
        {/* Question */}
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <div className="size-9 rounded-full bg-zinc-700 flex items-center justify-center">
              <User size={18} className="text-zinc-300" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-zinc-400 mb-2">You</div>
            <div className="text-[15px] leading-7 text-zinc-200 ">
              {question}
            </div>
          </div>
        </div>

        {/* Answer: */}
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <div className="size-9 rounded-full bg-zinc-700 flex items-center justify-center">
              <Bot size={18} className="text-zinc-200" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-zinc-400 mb-2">
              AI Assistant
            </div>
            <div className="text-[15px] leading-7 text-zinc-200 ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold text-white mt-5 mb-3">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold text-white mt-5 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  ul: ({ children }) => (
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal ml-6 mb-4 space-y-1">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="pl-1">{children}</li>,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-white">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-zinc-300">{children}</em>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-zinc-600 pl-4 my-4 text-zinc-400">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-zinc-800 rounded px-1.5 py-0.5 text-sm">
                      {children}
                    </code>
                  ),
                }}
              >
                {answer}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
