import { useState } from "react";

// Code Block Component with Copy Button
export const CodeBlock = ({ code, language }: { code: string, language: string }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="bg-gray-900 rounded-md p-4 overflow-x-auto border border-gray-700 relative">
      <button 
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="text-sm">
        <code className={`language-${language} text-gray-300`}>{code}</code>
      </pre>
    </div>
  );
};