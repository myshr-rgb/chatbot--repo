import React, { useState } from 'react';

// Health Guide Topics with illustrations and detailed content
const HEALTH_TOPICS = [
  {
    id: 'menstrual',
    title: 'Menstrual health',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    description: 'Understand your cycle, track changes and know what is normal for you.',
    fullDescription: 'Every cycle tells a story. Learn the four phases of your menstrual cycle, how hormones shift your energy and mood, and which changes are worth a conversation with your doctor.',
    guidePoints: [
      'The four phases of your cycle, explained simply',
      'Easing cramps, bloating and fatigue',
      'When irregular or heavy periods need attention'
    ],
    bgColor: '#F5E2EA',
    iconBg: '#EBBFD2',
    iconColor: '#3D524C',
    icon: '💧'
  },
  {
    id: 'pcos',
    title: 'PCOS & hormones',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    description: 'Clear guidance on PCOS, thyroid health and hormonal balance.',
    fullDescription: 'Polycystic ovary syndrome affects roughly one in ten women of reproductive age. Explore common signs, how it is diagnosed, and the everyday habits that help many women feel more in control.',
    guidePoints: [
      'Recognising early signs of PCOS',
      'Thyroid and hormone tests, demystified',
      'Food, movement and sleep for hormonal balance'
    ],
    bgColor: '#EBE4F4',
    iconBg: '#9A7BF0',
    iconColor: '#FFFFFF',
    icon: '✨'
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy & fertility',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
    description: 'From planning a family to postpartum recovery, step by gentle step.',
    fullDescription: 'Whether you are trying to conceive, expecting, or recently gave birth, find calm and practical information for each trimester and the weeks that follow.',
    guidePoints: [
      'Understanding your fertile window',
      'What to expect in each trimester',
      'Postpartum healing and emotional health'
    ],
    bgColor: '#E5EAD4',
    iconBg: '#C1CC9E',
    iconColor: '#3D524C',
    icon: '👶'
  },
  {
    id: 'menopause',
    title: 'Menopause',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    description: 'Navigate perimenopause and menopause with confidence and care.',
    fullDescription: 'Menopause is a natural transition, not an ending. Learn about hot flushes, sleep changes, bone health and the treatment options that can make this season more comfortable.',
    guidePoints: [
      'Perimenopause signs many women miss',
      'Managing hot flushes and night sweats',
      'Protecting bone and heart health'
    ],
    bgColor: '#FAF8F0',
    iconBg: '#3D524C',
    iconColor: '#FFFFFF',
    icon: '🌸'
  },
  {
    id: 'mental',
    title: 'Mental wellbeing',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    description: 'Support for stress, anxiety, mood changes and emotional resilience.',
    fullDescription: 'Hormones, life transitions and daily pressures all shape how we feel. Discover grounding practices and learn when to reach out for professional support.',
    guidePoints: [
      'How hormones influence mood',
      'Simple, daily grounding practices',
      'Finding the right professional support'
    ],
    bgColor: '#EBE4F4',
    iconBg: '#9A7BF0',
    iconColor: '#FFFFFF',
    icon: '🧠'
  },
  {
    id: 'sexual',
    title: 'Sexual health',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
    description: 'Honest, private answers about intimacy, contraception and infections.',
    fullDescription: 'Sexual health is part of overall health. Get respectful, shame-free information on contraception choices, common infections, and comfort during intimacy.',
    guidePoints: [
      'Comparing contraception options',
      'Recognising and preventing common infections',
      'Talking openly with your partner and doctor'
    ],
    bgColor: '#F5E2EA',
    iconBg: '#EBBFD2',
    iconColor: '#3D524C',
    icon: '💖'
  },
  {
    id: 'nutrition',
    title: 'Nutrition & movement',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    description: 'Nourishing food and joyful movement for every stage of life.',
    fullDescription: 'Your nutritional needs change through the years. Learn about iron, calcium and protein, and find movement that feels good rather than punishing.',
    guidePoints: [
      'Key nutrients for women, by life stage',
      'Preventing iron deficiency and anaemia',
      'Movement that supports your cycle'
    ],
    bgColor: '#E5EAD4',
    iconBg: '#C1CC9E',
    iconColor: '#3D524C',
    icon: '🍎'
  },
  {
    id: 'breast',
    title: 'Breast health',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    description: 'Self-checks, screening schedules and what changes to look for.',
    fullDescription: 'Breast health awareness empowers you at every stage. Learn how to perform self-exams, understand normal tissue changes, and know when to seek medical evaluation.',
    guidePoints: [
      'How and when to perform monthly self-checks',
      'Understanding breast density and routine screenings',
      'Recognising changes that warrant a doctor consultation'
    ],
    bgColor: '#FAF8F0',
    iconBg: '#3D524C',
    iconColor: '#FFFFFF',
    icon: '🍃'
  }
];

// Categorized Symptom Tags
const SYMPTOM_CATEGORIES = [
  {
    category: "Menstrual & Hormonal 🌸",
    items: [
      { id: 'Irregular or missed periods', label: 'Irregular or missed periods 📅' },
      { id: 'Severe period cramps', label: 'Severe period cramps 💔' },
      { id: 'Acne or excess facial hair', label: 'Acne or excess facial hair 🌋' },
      { id: 'Hair loss or weight changes', label: 'Hair loss or weight changes 💇‍♀️' },
      { id: 'Hot flashes or night sweats', label: 'Hot flashes or night sweats 🔥' }
    ]
  },
  {
    category: "Reproductive & Intimate Health 💧",
    items: [
      { id: 'Unusual vaginal discharge or itching', label: 'Unusual vaginal discharge or itching 🧴' },
      { id: 'Burning during urination', label: 'Burning during urination 🚽' },
      { id: 'Vaginal dryness', label: 'Vaginal dryness 🌵' },
      { id: 'Pregnancy-related symptoms', label: 'Pregnancy-related symptoms 🤰' }
    ]
  },
  {
    category: "Pain, Fatigue & Physical Wellness 🩺",
    items: [
      { id: 'Breast pain or lumps', label: 'Breast pain or lumps 🍒' },
      { id: 'Abdominal or pelvic pain', label: 'Abdominal or pelvic pain 🩺' },
      { id: 'Unusual fatigue or dizziness', label: 'Unusual fatigue or dizziness 🔋' },
      { id: 'Nausea or vomiting', label: 'Nausea or vomiting 🤢' },
      { id: 'Mood swings or anxiety', label: 'Mood swings or anxiety 🎭' }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('health'); // 'health', 'chat', or 'about'
  const [selectedTopic, setSelectedTopic] = useState(null); 
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [waterLitres, setWaterLitres] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'sakhie',
      text: 'Namaste! I am Sakhie, your gentle health companion. Select symptoms above or type your questions below.'
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

  const adjustWater = (delta) => {
    setWaterLitres((prev) => Math.max(0, parseFloat((prev + delta).toFixed(2))));
  };

  const handleAskSakhie = (topicTitle) => {
    setActiveTab('chat');
    const topicPrompt = `I would like to learn more about ${topicTitle}. Can you explain the key things I should know?`;
    setInput(topicPrompt);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() && selectedSymptoms.length === 0 && waterLitres === 0) return;

    const userText = input;
    const currentSymptoms = [...selectedSymptoms];
    if (waterLitres > 0) {
      currentSymptoms.push(`Water Intake: ${waterLitres}L / 2.25L`);
    }
    setInput('');

    const displayUserMsg = userText || `Logged today: ${currentSymptoms.join(', ')}`;
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
        setMessages((prev) => [...prev, { sender: 'sakhie', text: `Service Notice: ${data.detail || 'Unable to fetch response'}` }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'sakhie', text: 'Sakhie backend is currently offline.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F5EC', color: '#2D3B36', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Navigation Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 60px', backgroundColor: '#F7F5EC' }}>
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} 
          onClick={() => {
            setActiveTab('health');
            setSelectedTopic(null);
          }}
        >
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#9A7BF0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px' }}>
            🪷
          </div>
          <span style={{ fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#2D3B36' }}>
            Sakhie
          </span>
        </div>

        {/* Center Tab Switcher */}
        <div style={{ backgroundColor: '#EBE8DF', padding: '4px', borderRadius: '30px', display: 'flex', gap: '4px' }}>
          <button
            onClick={() => {
              setActiveTab('health');
              setSelectedTopic(null);
            }}
            style={{
              padding: '8px 22px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeTab === 'health' ? '#2D3B36' : 'transparent',
              color: activeTab === 'health' ? '#FFFFFF' : '#6B7A75',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Health
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            style={{
              padding: '8px 22px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeTab === 'chat' ? '#2D3B36' : 'transparent',
              color: activeTab === 'chat' ? '#FFFFFF' : '#6B7A75',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Chat
          </button>
          <button
            onClick={() => setActiveTab('about')}
            style={{
              padding: '8px 22px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeTab === 'about' ? '#2D3B36' : 'transparent',
              color: activeTab === 'about' ? '#FFFFFF' : '#6B7A75',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            About
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ border: 'none', background: 'none', fontSize: '14px', color: '#2D3B36', cursor: 'pointer' }}>
            🌐 EN ▾
          </button>
          <button style={{ backgroundColor: '#2D3B36', color: '#FFF', border: 'none', padding: '10px 22px', borderRadius: '25px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            Sign in
          </button>
        </div>
      </header>

      {/* Main View: Health Guides (Grid or Detail Page) */}
      {activeTab === 'health' && (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px 20px 80px 20px' }}>
          
          {/* Grid Overview View */}
          {!selectedTopic ? (
            <>
              <div style={{ marginBottom: '35px' }}>
                <h1 style={{ fontSize: '46px', fontFamily: 'Georgia, serif', fontWeight: '400', margin: '0 0 12px 0', color: '#2D3B36' }}>
                  Explore your health, <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#8B5CF6' }}>gently</span>
                </h1>
                <p style={{ fontSize: '16px', color: '#5A6B65', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>
                  Choose a topic to begin. Each guide explains the essentials and helps you know when to seek care.
                </p>
              </div>

              {/* 8 Card Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '22px' }}>
                {HEALTH_TOPICS.map((topic) => (
                  <div
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic)}
                    style={{
                      backgroundColor: topic.bgColor,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <div style={{ height: '140px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={topic.image} 
                        alt={topic.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <div 
                        style={{ 
                          position: 'absolute', 
                          top: '12px', 
                          right: '12px', 
                          width: '28px', 
                          height: '28px', 
                          borderRadius: '50%', 
                          backgroundColor: 'rgba(255,255,255,0.85)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justify: 'center', 
                          fontSize: '14px', 
                          color: '#2D3B36' 
                        }}
                      >
                        ↗
                      </div>
                    </div>

                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                          <div
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              backgroundColor: topic.iconBg,
                              color: topic.iconColor,
                              display: 'flex',
                              alignItems: 'center',
                              justify: 'center',
                              fontSize: '13px'
                            }}
                          >
                            {topic.icon}
                          </div>
                          <h3 style={{ fontSize: '19px', fontFamily: 'Georgia, serif', fontWeight: '600', margin: 0, color: '#2D3B36' }}>
                            {topic.title}
                          </h3>
                        </div>
                        <p style={{ fontSize: '13px', color: '#5A6B65', margin: 0, lineHeight: '1.4' }}>
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            
            /* Topic Detail View */
            <div>
              <button
                onClick={() => setSelectedTopic(null)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '14px',
                  color: '#5A6B65',
                  cursor: 'pointer',
                  marginBottom: '20px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                ← Back to Health Topics
              </button>

              <h1 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', fontWeight: '500', margin: '0 0 16px 0', color: '#2D3B36' }}>
                {selectedTopic.title}
              </h1>

              <p style={{ fontSize: '16px', color: '#5A6B65', lineHeight: '1.6', maxWidth: '800px', marginBottom: '32px' }}>
                {selectedTopic.fullDescription}
              </p>

              <div 
                style={{ 
                  backgroundColor: '#FAF8F0', 
                  borderRadius: '24px', 
                  padding: '32px', 
                  marginBottom: '32px', 
                  border: '1px solid #EBE8DF' 
                }}
              >
                <h2 style={{ fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: '500', margin: '0 0 20px 0', color: '#2D3B36' }}>
                  In this guide
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  {selectedTopic.guidePoints.map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div 
                        style={{ 
                          width: '24px', 
                          height: '24px', 
                          borderRadius: '50%', 
                          backgroundColor: '#C5D8A4', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justify: 'center', 
                          color: '#2D3B36', 
                          fontSize: '12px', 
                          fontWeight: 'bold' 
                        }}
                      >
                        ✓
                      </div>
                      <span style={{ fontSize: '15px', color: '#2D3B36' }}>{point}</span>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '13px', color: '#7A8A85', margin: 0, borderTop: '1px solid #EBE8DF', paddingTop: '16px' }}>
                  Full in-depth articles for this topic are being written with our medical reviewers.
                </p>
              </div>

              <div 
                style={{ 
                  backgroundColor: '#F5E2EA', 
                  borderRadius: '20px', 
                  padding: '28px 36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'space-between' 
                }}
              >
                <div>
                  <h3 style={{ fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: '500', margin: '0 0 6px 0', color: '#2D3B36' }}>
                    Have a question about this?
                  </h3>
                  <p style={{ fontSize: '14px', color: '#5A6B65', margin: 0 }}>
                    Sakhie can talk it through with you privately.
                  </p>
                </div>
                <button
                  onClick={() => handleAskSakhie(selectedTopic.title)}
                  style={{
                    backgroundColor: '#2D3B36',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '12px 26px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Ask Sakhie →
                </button>
              </div>

            </div>
          )}

        </main>
      )}

      {/* About Page View ("Our Story" - Exact Screenshot Design) */}
      {activeTab === 'about' && (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '50px 20px 80px 20px' }}>
          
          {/* Section Subheading */}
          <div style={{ fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#9A7BF0', fontWeight: 'bold', marginBottom: '16px' }}>
            Our Story
          </div>

          {/* Main Editorial Headline */}
          <h1 style={{ fontSize: '52px', fontFamily: 'Georgia, serif', fontWeight: '400', color: '#2D3B36', margin: '0 0 24px 0', maxWidth: '750px', lineHeight: '1.15' }}>
            Built for the women who <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#9A7BF0' }}>care</span> for everyone else
          </h1>

          {/* Intro Description */}
          <p style={{ fontSize: '16px', color: '#5A6B65', lineHeight: '1.6', maxWidth: '620px', marginBottom: '60px' }}>
            Sakhie comes from the word “sakhi” — a close friend and confidante. We are building the companion we wish our mothers, sisters and friends had always had.
          </p>

          {/* 3 Pillar Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            {/* Card 01 */}
            <div style={{ backgroundColor: '#FAF8F0', borderRadius: '24px', padding: '36px 30px', border: '1px solid #EBE8DF', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '16px', color: '#9A7BF0', fontWeight: 'bold' }}>01</div>
              <h3 style={{ fontSize: '24px', fontFamily: 'Georgia, serif', fontWeight: '500', color: '#2D3B36', margin: 0 }}>
                Warmth first
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6B65', lineHeight: '1.6', margin: 0 }}>
                We speak to you the way a caring friend would — never clinical, never condescending.
              </p>
            </div>

            {/* Card 02 */}
            <div style={{ backgroundColor: '#FAF8F0', borderRadius: '24px', padding: '36px 30px', border: '1px solid #EBE8DF', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '16px', color: '#9A7BF0', fontWeight: 'bold' }}>02</div>
              <h3 style={{ fontSize: '24px', fontFamily: 'Georgia, serif', fontWeight: '500', color: '#2D3B36', margin: 0 }}>
                Evidence always
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6B65', lineHeight: '1.6', margin: 0 }}>
                Our guidance is grounded in current medical research and reviewed by qualified professionals.
              </p>
            </div>

            {/* Card 03 */}
            <div style={{ backgroundColor: '#FAF8F0', borderRadius: '24px', padding: '36px 30px', border: '1px solid #EBE8DF', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '16px', color: '#9A7BF0', fontWeight: 'bold' }}>03</div>
              <h3 style={{ fontSize: '24px', fontFamily: 'Georgia, serif', fontWeight: '500', color: '#2D3B36', margin: 0 }}>
                Your privacy, protected
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6B65', lineHeight: '1.6', margin: 0 }}>
                Health is personal. We collect only what we need and never sell your information.
              </p>
            </div>

          </div>

        </main>
      )}

      {/* Interactive Chat Workspace View */}
      {activeTab === 'chat' && (
        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
          
          <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '20px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px', color: '#2D3B36' }}>Log Today's Symptoms:</h3>
              <input
                type="text"
                placeholder="🔍 Search symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: '6px 14px', borderRadius: '15px', border: '1px solid #E5E2D8', fontSize: '12px', width: '180px', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#EBF4F6', padding: '10px 16px', borderRadius: '14px', marginBottom: '15px' }}>
              <span style={{ fontSize: '20px' }}>💧</span>
              <div style={{ fontSize: '13px', color: '#2D3B36' }}>
                <strong>Water Hydration:</strong> {waterLitres} / 2.25 L
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
                <button onClick={() => adjustWater(-0.25)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', backgroundColor: '#D4E8ED', cursor: 'pointer', fontWeight: 'bold', color: '#2D3B36' }}>-</button>
                <button onClick={() => adjustWater(0.25)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', backgroundColor: '#D4E8ED', cursor: 'pointer', fontWeight: 'bold', color: '#2D3B36' }}>+</button>
              </div>
            </div>

            <div style={{ maxHeight: '220px', overflowY: 'auto' }}>
              {SYMPTOM_CATEGORIES.map((cat, idx) => {
                const filteredItems = cat.items.filter((item) =>
                  item.label.toLowerCase().includes(searchQuery.toLowerCase())
                );
                if (filteredItems.length === 0) return null;

                return (
                  <div key={idx} style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#6B7A75', marginBottom: '6px' }}>{cat.category}</div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {filteredItems.map((sym) => {
                        const isSelected = selectedSymptoms.includes(sym.id);
                        return (
                          <button
                            key={sym.id}
                            onClick={() => toggleSymptom(sym.id)}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '16px',
                              border: 'none',
                              backgroundColor: isSelected ? '#9A7BF0' : '#E5EAD4',
                              color: isSelected ? '#FFFFFF' : '#2D3B36',
                              cursor: 'pointer',
                              fontSize: '12px',
                              fontWeight: isSelected ? '600' : 'normal',
                              transition: 'all 0.15s'
                            }}
                          >
                            {sym.label} {isSelected ? '✓' : ''}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '20px', height: '360px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '75%' }}>
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '18px',
                    backgroundColor: msg.sender === 'user' ? '#2D3B36' : '#F5E2EA',
                    color: msg.sender === 'user' ? '#FFFFFF' : '#2D3B36',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  <strong>{msg.sender === 'user' ? 'You' : 'Sakhie'}:</strong>
                  <br />
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div style={{ color: '#8B5CF6', fontStyle: 'italic', fontSize: '13px' }}>Sakhie is composing a response...</div>}
          </div>

          <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sakhie about your symptoms or wellness in any language..."
              style={{ flex: 1, padding: '14px 20px', borderRadius: '30px', border: '1px solid #E5E2D8', outline: 'none', fontSize: '14px', backgroundColor: '#FFFFFF' }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '0 26px', backgroundColor: '#2D3B36', color: '#FFFFFF', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: '600', fontSize: '14px' }}
            >
              Send
            </button>
          </form>

        </main>
      )}

    </div>
  );
}