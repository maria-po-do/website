import React from 'react';
import Link from 'next/link';

export default function SailingCTA(): React.JSX.Element {
  return (
    <div className="sailing-cta">
      <Link href="/sailing" className="t-btn sailing-button">
        Sailing with Maria
      </Link>
    </div>
  );
} 