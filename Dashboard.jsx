// Dashboard.jsx
// Dashboard page with cards for forms fetched from an API

function Dashboard({ user }) {
  const [forms, setForms] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    // Simulate API call with test data
    setTimeout(() => {
      setForms([
        {
          id: 1,
          title: 'Mood Tracker',
          description: 'Track your daily mood and emotions.',
        },
        {
          id: 2,
          title: 'Wellness Survey',
          description: 'A quick survey about your current wellness habits.',
        },
        {
          id: 3,
          title: 'Stress Check',
          description: 'Evaluate your current stress level.',
        },
      ]);
      setLoading(false);
    }, 800);
  }, [user]);

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', marginTop: 40 }}>Loading forms...</div>;
  if (error) return <div style={{ color: '#E53935', textAlign: 'center', marginTop: 40 }}>{error}</div>;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#181A20',
      padding: '32px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ color: '#fff', marginBottom: 32 }}>Welcome, {user?.username || 'User'}</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
        justifyContent: 'center',
        width: '100%',
        maxWidth: 1200,
      }}>
        {forms.length === 0 && <div style={{ color: '#A3A6B3' }}>No forms available.</div>}
        {forms.map(form => (
          <div key={form.id} style={{
            background: '#23262F',
            borderRadius: 14,
            boxShadow: '0 4px 24px rgba(0,225,214,0.08)',
            padding: 24,
            minWidth: 320,
            maxWidth: 400,
            color: '#fff',
            border: '1.5px solid #393E4B',
            marginBottom: 16,
          }}>
            <h2 style={{ color: '#00E1D6', marginBottom: 8 }}>{form.title}</h2>
            <p style={{ color: '#A3A6B3', marginBottom: 16 }}>{form.description}</p>
            <button style={{
              background: 'linear-gradient(90deg, #00E1D6 0%, #00BFAE 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 0',
              width: '100%',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              marginTop: 8,
            }}>Open Form</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Expose Dashboard globally for Babel/HTML usage
window.Dashboard = Dashboard;

export default Dashboard;
