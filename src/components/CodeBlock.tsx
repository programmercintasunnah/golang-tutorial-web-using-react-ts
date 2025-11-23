import type { FC } from "react";

interface Props {
  title?: string;
  code: string;
  language?: string;
}

const CodeBlock: FC<Props> = ({ title, code, language = "go" }) => {
  return (
    <div className="my-4">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
