import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [domain, setDomain] = useState('');
  const [available, setAvailable] = useState(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate(); // ✅ for redirect

  // Style for all inputs
  const inputStyle = {
    padding: '0.5rem',
    fontSize: '1rem',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '1rem'
  };

  // Simulate domain check
  useEffect(() => {
    const checkDomain = async () => {
      if (domain === '') {
        setAvailable(null);
        return;
      }

      setChecking(true);
      setError('');
      try {
        // 🚫 Real API call (commented out)
        /*
        const response = await fetch(
          `https://interview-task-green.vercel.app/task/domains/check/${domain}.expressitbd.com`
        );
        const data = await response.json();
        if (data.taken) {
          setAvailable(false);
          setError('❌ Domain is taken. Try another one.');
        } else {
          setAvailable(true);
          setError('');
        }
        */

        // ✅ Simulated domain check
        setTimeout(() => {
          setAvailable(true); // Always "available"
          setError('');
          setChecking(false);
        }, 1000);
      } catch (err) {
        setAvailable(null);
        setError('⚠️ Something went wrong.');
        setChecking(false);
      }
    };

    const timeout = setTimeout(checkDomain, 800);
    return () => clearTimeout(timeout);
  }, [domain]);

  // Simulated store submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!available) {
      setSubmitMessage('❌ Please choose an available domain.');
      return;
    }

    if (!name || !email || !country || !currency || !category) {
      setSubmitMessage('⚠️ Please fill out all fields.');
      return;
    }

    try {
      // 🚫 Real API call (commented out)
      /*
      const response = await fetch('https://interview-task-green.vercel.app/task/stores/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          country,
          currency,
          category,
          domain,
        }),
      });

      if (response.ok) {
        setSubmitMessage('✅ Store created successfully!');
        ...
        navigate('/products');
      } else {
        setSubmitMessage('❌ Failed to create store. Try again.');
      }
      */

      // ✅ Simulated success
      setTimeout(() => {
        setSubmitMessage('✅ Store created successfully!');
        setName('');
        setEmail('');
        setCountry('');
        setCurrency('');
        setCategory('');
        setDomain('');
        setAvailable(null);
        navigate('/products');
      }, 1000);
    } catch (error) {
      setSubmitMessage('⚠️ Network error. Please try later.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Store Domain Checker</h1>

      <input
        type="text"
        placeholder="Enter domain (e.g., coolstore)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{
          ...inputStyle,
          border: available === false
            ? '2px solid red'
            : available === true
            ? '2px solid green'
            : '1px solid #ccc',
        }}
      />

      {checking && <p>🔄 Checking domain...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {available && <p style={{ color: 'green' }}>✅ Domain is available!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Store name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Country (e.g., Bangladesh)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Currency (e.g., BDT)"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Category (e.g., clothing)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: '0.6rem 1.2rem',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Create Store
        </button>
      </form>

      {submitMessage && (
        <p style={{ marginTop: '1rem', color: submitMessage.includes('✅') ? 'green' : 'red' }}>
          {submitMessage}
        </p>
      )}
    </div>
  );
}

export default App;
