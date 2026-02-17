import { useEffect, useState } from 'react';

interface RouterProps {
  children: {
    [path: string]: JSX.Element;
  };
}

export function Router({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const newPath = new URL(link.href).pathname;
        window.history.pushState({}, '', newPath);
        setCurrentPath(newPath);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Normalize path (remove trailing slash)
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  return children[normalizedPath] || children['/'] || <div>Page not found</div>;
}
