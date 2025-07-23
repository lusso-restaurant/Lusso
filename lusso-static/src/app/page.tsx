import { AuroraBackground } from '@/components';

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

      {/* Hero Section with Aurora Background */}
      <div style={{ height: '500px', overflow: 'hidden' }}>
        <AuroraBackground>
          <div style={{
            textAlign: 'center',
            zIndex: 10,
            position: 'relative'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#2c3e50'
            }}>
              Welcome to Lusso
            </h1>
            <p style={{
              fontSize: '1.2rem',
              maxWidth: '600px',
              lineHeight: '1.6',
              color: '#555'
            }}>
              Experience culinary excellence with our luxury dining. 
              Where every meal becomes an unforgettable moment.
            </p>
            <button style={{
              marginTop: '2rem',
              padding: '12px 24px',
              backgroundColor: '#d4af37',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Make Reservation
            </button>
          </div>
        </AuroraBackground>
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