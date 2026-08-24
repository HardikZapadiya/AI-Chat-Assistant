import { Bot, Sparkles } from "lucide-react";

function Welcome() {
  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-5 size-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-900/40">
          <Bot size={28} className="text-white" />
        </div>

        {/* App Name */}
        <h1 className="text-3xl font-semibold tracking-tight text-white ">
          AI Workspace
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Your intelligent AI assistant for building, learning, and exploring
          ideas with ease.
        </p>

        {/* Small Badge */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-xs text-zinc-400">
          <Sparkles size={13} className="text-fuchsia-400" />
          AI-powered workspace
        </div>

        {/* Hint */}
        <p className="mt-6 text-xs text-zinc-500 animate-pulse">
          Ask a question below to get started
        </p>
      </div>
    </div>
  );
}

export default Welcome;
