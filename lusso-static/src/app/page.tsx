export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header Section - Red */}
      <div style={{
        height: '80px',
        backgroundColor: '#FF6B6B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        HEADER
      </div>

      {/* Hero Section - Blue */}
      <div style={{
        height: '400px',
        backgroundColor: '#4ECDC4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        HERO SECTION
      </div>

      {/* Content Section - Green */}
      <div style={{
        height: '300px',
        backgroundColor: '#45B7D1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        MAIN CONTENT
      </div>

      {/* Features Section - Purple */}
      <div style={{
        height: '250px',
        backgroundColor: '#9B59B6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        FEATURES
      </div>

      {/* Footer Section - Orange */}
      <div style={{
        height: '120px',
        backgroundColor: '#F39C12',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        FOOTER
      </div>
    </div>
  );
}