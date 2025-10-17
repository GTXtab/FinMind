import React from "react";

interface SectionTemplateProps {
  title: string; 
  children?: React.ReactNode;
}

export const ArticleTemplate: React.FC<SectionTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <article className="p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </article>
  );
};
