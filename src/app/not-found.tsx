import Link from 'next/link';

export default function NotFound(): React.JSX.Element {
  return (
    <div style={{
      padding: '100px 20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
} 