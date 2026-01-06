'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<string>('loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://glorious-palm-tree-x5qgpqg5q75vfv64x-8000.app.github.dev/health')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setStatus(data.status);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Mashorizon Frontend</h1>

      <div className="mt-6">
        <p className="font-semibold">Backend health check:</p>

        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <p className="text-green-600">{status}</p>
        )}
      </div>
    </main>
  );
}
