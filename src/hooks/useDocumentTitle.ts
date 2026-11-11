import { useEffect } from "react";

const SITE = "Sunaina Ruhaniat — Technical Project Manager & Software Engineer";

export const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} · Sunaina Ruhaniat` : SITE;
  }, [title]);
};
