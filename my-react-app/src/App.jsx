import React, { useState } from 'react';

const AVAILABLE_SYMPTOMS = [
  { id: 'Acne', label: 'Acne 🌋' },
  { id: 'Fatigue', label: 'Fatigue 🔋' },
  { id: 'Bloating', label: 'Bloating 🎈' },
  { id: 'Irregular Period', label: 'Irregular Period 📅' },
  { id: 'Cramps', label: 'Cramps 💔' },
  { id: 'Headache', label: 'Headache 🤕' },
  { id: 'Cravings', label: 'Cravings 🍔' }
];

export default function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [messages, setMessages] = useState([
    {
      sender: 'sakhie',
      text: 'Namaste! I am Sakhie. Select your symptoms above or describe how you feel in any language.'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleSymptom = (symptomId) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((s) => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() && selectedSymptoms.length === 0) return;

    const userText = input;
    const currentSymptoms = [...selectedSymptoms];
    setInput('');

    const displayUserMsg = userText || `Logged symptoms: ${currentSymptoms.join(', ')}`;
    setMessages((prev) => [...prev, { sender: 'user', text: displayUserMsg }]);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 'user_1',
          message: userText,
          selected_symptoms: currentSymptoms,
          city: 'Bengaluru'
        })
      });

      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => [...prev, { sender: 'sakhie', text: data.bot_response }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'sakhie', text: 'Error connecting to Sakhie server.' }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'sakhie', text: 'Backend is offline or unreachable.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#F4F0E0' }}>
      {/* Sidebar (Seaweed Theme #3D524C) */}
      <div style={{ width: '250px', backgroundColor: '#3D524C', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#F1CDE2', margin: '0 0 20px 0' }}>🌸 Sakhie</h2>
          <button style={{ width: '100%', padding: '10px', backgroundColor: '#9F7CEF', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
            + New Chat
          </button>
          <div style={{ marginTop: '30px', fontSize: '14px', lineHeight: '2' }}>
            <p style={{ cursor: 'pointer', fontWeight: 'bold' }}>💬 Chat Assistant</p>
            <p style={{ cursor: 'pointer', opacity: 0.8 }}>📊 Symptoms Log</p>
            <p style={{ cursor: 'pointer', opacity: 0.8 }}>📅 Cycle Tracking</p>
            <p style={{ cursor: 'pointer', opacity: 0.8 }}>🏥 Consult Doctors</p>
          </div>
        </div>
        <div style={{ fontSize: '12px', borderTop: '1px solid #5a736c', paddingTop: '10px' }}>
          Symptom Status: <strong>Cycle Day 21</strong>
        </div>
      </div>

      {/* Main Workspace */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
        
        {/* Top Section: Symptom Selection Bar (Pistachio #C6CD85 Theme) */}
        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '12px', marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#3D524C' }}>Tap Today's Symptoms to Log:</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {AVAILABLE_SYMPTOMS.map((sym) => {
              const isSelected = selectedSymptoms.includes(sym.id);
              return (
                <button
                  key={sym.id}
                  onClick={() => toggleSymptom(sym.id)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '20px',
                    border: 'none',
                    backgroundColor: isSelected ? '#9F7CEF' : '#C6CD85',
                    color: isSelected ? '#fff' : '#333',
                    cursor: 'pointer',
                    fontWeight: isSelected ? 'bold' : 'normal',
                    transition: 'all 0.2s'
                  }}
                >
                  {sym.label} {isSelected ? '✓' : ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Window */}
        <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '12px', padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '75%' }}>
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: msg.sender === 'user' ? '#3D524C' : '#F1CDE2',
                  color: msg.sender === 'user' ? '#fff' : '#333',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.4'
                }}
              >
                <strong>{msg.sender === 'user' ? 'You' : 'Sakhie'}:</strong>
                <br />
                {msg.text}
              </div>
            </div>
          ))}
          {loading && <div style={{ color: '#888', fontStyle: 'italic' }}>Sakhie is thinking...</div>}
        </div>

        {/* Bottom Input Area */}
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptoms (e.g., in Hindi, Kannada, English)..."
            style={{ flex: 1, padding: '14px', borderRadius: '25px', border: '1px solid #ccc', outline: 'none', fontSize: '14px' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '0 24px', backgroundColor: '#3D524C', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}