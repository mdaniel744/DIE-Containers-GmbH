"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const isUnsafeHref = (href = "") => /^(javascript|data|vbscript):/i.test(href.trim());
const isInternalHref = (href = "") => href.startsWith("/") && !href.startsWith("//");
const isExternalWebHref = (href = "") => /^https?:\/\//i.test(href);

function RichTextLink({ node, href = "", children, ...props }) {
  if (!href || isUnsafeHref(href)) {
    return <span>{children}</span>;
  }

  const className = "font-medium text-[#1E5FAE] underline underline-offset-4 hover:text-[#174C8C] transition-colors";

  if (isInternalHref(href)) {
    return (
      <Link to={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={isExternalWebHref(href) ? "_blank" : undefined}
      rel={isExternalWebHref(href) ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

const markdownComponents = {
  h1: ({ node, ...props }) => (
    <h1 className="font-heading text-3xl font-bold text-foreground mt-9 mb-4 first:mt-0 tracking-tight" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3 first:mt-0 tracking-tight" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="font-heading text-xl font-semibold text-foreground mt-7 mb-3 first:mt-0" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2 first:mt-0" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl whitespace-pre-line" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-muted-foreground marker:text-[#1E5FAE]" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-muted-foreground marker:text-[#1E5FAE]" {...props} />
  ),
  li: ({ node, ...props }) => (
    <li className="pl-1 leading-relaxed" {...props} />
  ),
  a: RichTextLink,
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: ({ node, ...props }) => (
    <em className="italic text-foreground/90" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-[#1E5FAE] bg-muted/40 rounded-r-xl px-5 py-4 my-6 text-muted-foreground italic" {...props} />
  ),
  hr: ({ node, ...props }) => (
    <hr className="my-8 border-border" {...props} />
  ),
  code: ({ node, inline, ...props }) => (
    <code
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 text-sm text-foreground",
        !inline && "block overflow-x-auto p-4 my-5"
      )}
      {...props}
    />
  ),
};

export default function RichTextContent({ content, className }) {
  if (!content?.trim()) return null;

  return (
    <div className={cn("rich-text-content", className)}>
      <ReactMarkdown components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
