import { PortableText } from "@portabletext/react";

export function RichContent(props: Parameters<typeof PortableText>[0]) {
  return (
    <PortableText
      value={props.value}
      components={{
        block: {
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-6 mb-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-5 mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mt-3 mb-2">{children}</h4>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-muted pl-4 italic text-secondary my-4">
              {children}
            </blockquote>
          ),
          normal: ({ children }) => <p className="my-2">{children}</p>,
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc list-inside my-2">{children}</ul>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li className="ml-4">{children}</li>,
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          link: ({ value, children }) => (
            <a
              href={value?.href}
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        },
      }}
    />
  );
}
