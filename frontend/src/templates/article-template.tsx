import React from "react";

interface SectionTemplateProps {
  title: string; 
  children?: React.ReactNode;
  className?: string;
}

export const ArticleTemplate: React.FC<SectionTemplateProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <article className={`p-6 my-5 rounded-lg shadow-md mb-6 bg-white min-[1024px]:m-0 ${className}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </article>
  );
};
