import React from 'react';
import './RedirectPage.css';

const RedirectPage = ({ subPath = '' }) => {
  const [showFallback, setShowFallback] = React.useState(false);
  const baseUrl = 'https://www.zola.com/wedding/mattieandjack2026';
  const redirectUrl = `${baseUrl}${subPath}`;

  React.useEffect(() => {
    // Redirect after 1 second
    const redirectTimer = setTimeout(() => {
      window.location.replace(redirectUrl);
    }, 1000);

    // Show fallback button after 8 seconds
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 8000);

    // Cleanup timers
    return () => {
      clearTimeout(redirectTimer);
      clearTimeout(fallbackTimer);
    };
  }, [redirectUrl]);

  return (
    <div className="redirect-page">
      <div className="container">
        <h1>Mattie & Jack</h1>
        {!showFallback ? (
          <div className="spinner"></div>
        ) : (
          <div className="fallback-button">
            <a href={redirectUrl}>view website</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RedirectPage;
