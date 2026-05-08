import { useEffect } from 'react';

const SITE_NAME = 'Dago Heritage 1917';

/**
 * Sets the document <title> for the current page.
 * @param {string} pageTitle - e.g. "Home", "Golf Course"
 */
const usePageTitle = (pageTitle) => {
  useEffect(() => {
    const prev = document.title;
    document.title = pageTitle
      ? `${pageTitle} | ${SITE_NAME}`
      : SITE_NAME;
    return () => {
      document.title = prev;
    };
  }, [pageTitle]);
};

export default usePageTitle;
