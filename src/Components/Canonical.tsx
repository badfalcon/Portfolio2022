import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://badfalcon.net';

const setCanonical = (href: string) => {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const Canonical = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
    setCanonical(`${SITE_ORIGIN}${normalized}`);
  }, [pathname]);

  return null;
};

export default Canonical;
