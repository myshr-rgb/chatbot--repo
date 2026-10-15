import React, { useState } from 'react';

// Insert Google Fonts dynamically for premium editorial typography
if (typeof document !== 'undefined' && !document.getElementById('sakhie-fonts')) {
  const link = document.createElement('link');
  link.id = 'sakhie-fonts';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
  document.head.appendChild(link);
}

// Deeply Enriched Health Guide Topics with Warm Editorial Artwork
const HEALTH_TOPICS = [
  {
    id: 'menstrual',
    title: 'Menstrual health',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    description: 'Understand your cycle, track changes and know what is normal for you.',
    fullDescription: 'Every cycle tells a story. Learn the four phases of your menstrual cycle (follicular, ovulatory, luteal, and menstrual), how hormones shift your energy and mood, and which changes are worth a conversation with your doctor.',
    quickFacts: [
      'Normal cycle length: 21 to 35 days',
      'Average period duration: 3 to 7 days',
      'Track 3+ cycles to spot your unique rhythm'
    ],
    guidePoints: [
      'The four phases of your cycle, explained simply',
      'Easing cramps, bloating, and fatigue with nutrition and gentle movement',
      'Differentiating normal variations from conditions like endometriosis'
    ],
    redFlags: [
      'Soaking through one or more pads/tampons every hour for consecutive hours',
      'Periods lasting longer than 8 days or severe incapacitating cramps',
      'Bleeding or spotting between periods or after sexual intercourse'
    ],
    faqs: [
      {
        q: 'Why are my periods inconsistent or irregular?',
        a: 'Irregularity can stem from stress, rapid weight shifts, thyroid variations, PCOS, or hormonal transitions. Tracking your symptoms helps identify underlying patterns.'
      },
      {
        q: 'How can I relieve severe menstrual cramps naturally?',
        a: 'Applying heat therapy, staying hydrated, taking magnesium/omega-3 supplements, and gentle pelvic yoga stretches can help relax uterine muscle contractions.'
      }
    ],
    bgColor: '#F5E2EA',
    iconBg: '#EBBFD2',
    iconColor: '#2D3B36',
    icon: '💧'
  },
  {
    id: 'pcos',
    title: 'PCOS & hormones',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    description: 'Clear guidance on PCOS, thyroid health and hormonal balance.',
    fullDescription: 'Polycystic Ovary Syndrome (PCOS) affects roughly 1 in 10 women of reproductive age. Explore common signs like insulin resistance and androgen imbalance, how it is clinically diagnosed, and everyday lifestyle habits that promote hormonal harmony.',
    quickFacts: [
      'Affects ~10% of women worldwide',
      '3 core criteria: irregular periods, high androgens, polycystic ovaries',
      'Lifestyle & dietary tweaks significantly ease symptoms'
    ],
    guidePoints: [
      'Recognising early signs of PCOS, acne, and androgenic changes',
      'Demystifying blood work: LH, FSH, thyroid (TSH), and fasting insulin',
      'Low-GI nutrition, strength training, and sleep protocols for metabolic health'
    ],
    redFlags: [
      'Absent periods for more than 3 consecutive months (amenorrhea)',
      'Sudden, rapid weight gain alongside severe fatigue and hair thinning',
      'Extreme mood fluctuations or symptoms of clinical anxiety and depression'
    ],
    faqs: [
      {
        q: 'Can I manage PCOS without medication?',
        a: 'Many women successfully manage PCOS symptoms through balanced nutrition (focusing on protein and fiber), resistance training, stress management, and targeted supplements under medical guidance.'
      },
      {
        q: 'Does having PCOS mean I cannot get pregnant?',
        a: 'No. While PCOS is a common cause of subfertility due to irregular ovulation, most women with PCOS conceive naturally or with minor lifestyle/medical support.'
      }
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
    fullDescription: 'Whether you are actively trying to conceive, navigating pregnancy, or recovering postpartum, find calm, evidence-based guidance for every trimester and the fourth trimester that follows.',
    quickFacts: [
      'Fertile window: 5 days before ovulation + ovulation day',
      'Folate/Folic Acid supplementation recommended preconception',
      'Postpartum recovery takes 6-12 months minimum'
    ],
    guidePoints: [
      'Identifying your fertile window and tracking basal body temperature',
      'Trimester-by-trimester physical shifts, essential nutrients, and prenatal care',
      'Postpartum physical healing, pelvic floor care, and emotional well-being'
    ],
    redFlags: [
      'Heavy vaginal bleeding or severe abdominal cramping during pregnancy',
      'Sudden swelling of hands/face, severe headache, or vision changes (preeclampsia indicators)',
      'Persistent sadness, detachment, or severe anxiety postpartum'
    ],
    faqs: [
      {
        q: 'When should I start taking prenatal vitamins?',
        a: 'It is recommended to start taking prenatal vitamins containing at least 400mcg of folic acid 1 to 3 months before trying to conceive to support early neural development.'
      },
      {
        q: 'What is the "Fourth Trimester"?',
        a: 'The first 12 weeks postpartum are known as the fourth trimester—a critical period of deep hormonal adjustment, tissue healing, newborn bonding, and emotional transition.'
      }
    ],
    bgColor: '#E5EAD4',
    iconBg: '#C1CC9E',
    iconColor: '#2D3B36',
    icon: '👶'
  },
  {
    id: 'menopause',
    title: 'Menopause',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    description: 'Navigate perimenopause and menopause with confidence and care.',
    fullDescription: 'Menopause is a natural transition, not an ending. Learn about perimenopause shifts, hot flushes, mood fluctuations, bone density preservation, and modern treatment options (including MHT/HRT) that support longevity and comfort.',
    quickFacts: [
      'Perimenopause can begin 4 to 8 years before menopause',
      'Menopause is officially reached after 12 full months without a period',
      'Estrogen decline impacts bone density and cardiovascular health'
    ],
    guidePoints: [
      'Recognising perimenopause signs: sleep disturbances, cycle variations, mood shifts',
      'Evidence-based strategies for managing hot flushes and night sweats',
      'Protecting bone density with strength training, calcium, and vitamin D'
    ],
    redFlags: [
      'Any vaginal bleeding after reaching full menopause',
      'Severe, debilitating joint pain or extreme sudden mood shifts',
      'Heart palpitations accompanied by dizziness or shortness of breath'
    ],
    faqs: [
      {
        q: 'How do I know if I am in perimenopause?',
        a: 'Common signs include changes in period flow/frequency, sudden night sweats, brain fog, unexplained fatigue, and mood changes, typically starting in your 40s.'
      },
      {
        q: 'Is Menopausal Hormone Therapy (MHT/HRT) safe?',
        a: 'For most healthy women under 60 or within 10 years of menopause, MHT is safe and highly effective for symptom relief when tailored by a specialized physician.'
      }
    ],
    bgColor: '#FAF8F0',
    iconBg: '#2D3B36',
    iconColor: '#FFFFFF',
    icon: '🌸'
  },
  {
    id: 'mental',
    title: 'Mental wellbeing',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    description: 'Support for stress, anxiety, mood changes and emotional resilience.',
    fullDescription: 'Fluctuating hormones, life transitions, societal pressures, and physical fatigue deeply influence emotional health. Discover grounding mindfulness practices, hormonal mood links (PMDD), and guidance on finding professional care.',
    quickFacts: [
      'Serotonin levels fluctuate alongside estrogen and progesterone',
      'PMDD affects 3-8% of menstruating individuals',
      'Daily 10-minute grounding routines reduce cortisol significantly'
    ],
    guidePoints: [
      'Understanding PMDD vs PMS and cycle-related mood shifts',
      'Daily breathwork, somatic grounding, and nervous system regulation',
      'How to choose between therapy modalities (CBT, somatic therapy, counseling)'
    ],
    redFlags: [
      'Persistent hopelessness or severe intrusive thoughts prior to menstruation',
      'Inability to function in daily life, work, or relationships due to overwhelming anxiety',
      'Thoughts of self-harm or despair (seek emergency care immediately)'
    ],
    faqs: [
      {
        q: 'Why do I feel unusually anxious or emotional right before my period?',
        a: 'In the late luteal phase, progesterone drops rapidly, which can lower serotonin and GABA in the brain, triggering heightened anxiety, irritability, and vulnerability.'
      },
      {
        q: 'What is the difference between PMS and PMDD?',
        a: 'Premenstrual Dysphoric Disorder (PMDD) is a severe, debilitating form of PMS characterized by intense mood swings, clinical depression, or severe anger that interferes with daily life.'
      }
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
    fullDescription: 'Sexual wellness is an integral part of physical and emotional health. Get clear, respectful, shame-free information on contraception methods, STI screening protocols, pelvic comfort, and open communication with partners.',
    quickFacts: [
      'Routine STI screenings recommended annually for sexually active individuals',
      'Libido varies naturally with cycle phases, stress, and medication',
      'Pelvic floor health directly influences intimate comfort'
    ],
    guidePoints: [
      'Comprehensive comparison of hormonal vs non-hormonal contraception',
      'Recognising symptoms of common vaginitis (BV, yeast, trichomoniasis)',
      'Navigating pain during intimacy (dyspareunia) and pelvic floor tension'
    ],
    redFlags: [
      'Unexplained pelvic pain during or after intercourse',
      'Foul-smelling, unusual green/yellow discharge accompanied by burning',
      'Blisters, sores, or painful lumps in the genital area'
    ],
    faqs: [
      {
        q: 'How do I choose the right contraceptive method for me?',
        a: 'Consider your health history, future family planning, convenience, and side effect tolerance. Discuss options like IUDs, pills, implants, or barrier methods with your doctor.'
      },
      {
        q: 'Is pain during intimacy normal?',
        a: 'Occasional discomfort due to dryness can happen, but persistent pain is not normal. It can stem from infections, pelvic floor tightness, endometriosis, or hormonal dryness.'
      }
    ],
    bgColor: '#F5E2EA',
    iconBg: '#EBBFD2',
    iconColor: '#2D3B36',
    icon: '💖'
  },
  {
    id: 'nutrition',
    title: 'Nutrition & movement',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    description: 'Nourishing food and joyful movement for every stage of life.',
    fullDescription: 'Your nutritional and physiological needs evolve across life stages. Learn how iron, calcium, vitamin D, and protein sustain your energy, and discover movement practices that honor your body without causing metabolic burnout.',
    quickFacts: [
      'Iron needs for menstruating women: 18mg daily',
      'Protein requirements: 1.2–1.6g per kg of body weight for active health',
      'Cycle syncing workouts enhances recovery and hormonal health'
    ],
    guidePoints: [
      'Essential micronutrients for women: combating iron deficiency and anemia',
      'Syncing movement with cycle phases (gentle yoga during period, strength during follicular)',
      'Balanced meal building for stable blood sugar and sustained daily energy'
    ],
    redFlags: [
      'Extreme weakness, pale skin, cold hands, and shortness of breath (severe anemia signs)',
      'Obsessive food restriction or compulsive exercise patterns',
      'Chronic digestive distress or severe unexplained food intolerances'
    ],
    faqs: [
      {
        q: 'How can I increase my iron absorption through diet?',
        a: 'Combine iron-rich foods (spinach, lentils, dark poultry, seeds) with Vitamin C (citrus, bell peppers) and avoid drinking coffee/tea directly alongside iron-heavy meals.'
      },
      {
        q: 'Should I change my workout intensity based on my menstrual cycle?',
        a: 'Listening to your body is key. High-energy phases (follicular and ovulatory) support heavier strength and cardio, while the luteal and menstrual phases benefit from lower-intensity yoga or walking.'
      }
    ],
    bgColor: '#E5EAD4',
    iconBg: '#C1CC9E',
    iconColor: '#2D3B36',
    icon: '🍎'
  },
  {
    id: 'breast',
    title: 'Breast health',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    description: 'Self-checks, screening schedules and what changes to look for.',
    fullDescription: 'Proactive breast awareness empowers you at every age. Learn how to perform effective monthly self-exams, recognize normal fibrous tissue variations across your cycle, and know when to seek clinical evaluation.',
    quickFacts: [
      'Best time for self-check: 3–5 days after your period ends',
      'Mammogram guidelines generally start between ages 40–50',
      'Most breast lumps (~80%) are non-cancerous benign cysts or fibroadenomas'
    ],
    guidePoints: [
      'Step-by-step technique for thorough monthly self-examinations',
      'Understanding breast tissue density and screening recommendations',
      'Managing cyclical breast tenderness and fibrocystic changes'
    ],
    redFlags: [
      'A new, firm, painless lump or thickening in the breast or underarm area',
      'Nipple retraction, dimpling of skin (orange peel texture), or unexplained redness',
      'Spontaneous or bloody nipple discharge from one breast'
    ],
    faqs: [
      {
        q: 'Why do my breasts feel tender or lumpy before my period?',
        a: 'Hormonal fluctuations (rising progesterone) cause milk glands and fluid retention to swell in the days before your period, often creating temporary tenderness or lumpiness.'
      },
      {
        q: 'How often should I perform a breast self-exam?',
        a: 'Performing a self-check once a month—ideally a few days after your period when hormonal swelling is lowest—helps you become familiar with what is normal for your body.'
      }
    ],
    bgColor: '#FAF8F0',
    iconBg: '#2D3B36',
    iconColor: '#FFFFFF',
    icon: '🍃'
  }
];

// Symptom Categories
const SYMPTOM_CATEGORIES = [
  {
    category: "Menstrual & Hormonal 🌸",
    items: [
      { id: 'Irregular or missed periods', label: 'Irregular / missed periods 📅' },
      { id: 'Severe period cramps', label: 'Severe period cramps 💔' },
      { id: 'Acne or excess facial hair', label: 'Acne / facial hair 🌋' },
      { id: 'Hair loss or weight changes', label: 'Hair loss / weight changes 💇‍♀️' },
      { id: 'Hot flashes or night sweats', label: 'Hot flashes / night sweats 🔥' }
    ]
  },
  {
    category: "Reproductive & Intimate Health 💧",
    items: [
      { id: 'Unusual vaginal discharge or itching', label: 'Unusual discharge / itching 🧴' },
      { id: 'Burning during urination', label: 'Burning during urination 🚽' },
      { id: 'Vaginal dryness', label: 'Vaginal dryness 🌵' },
      { id: 'Pregnancy-related symptoms', label: 'Pregnancy symptoms 🤰' }
    ]
  },
  {
    category: "Pain, Fatigue & Physical Wellness 🩺",
    items: [
      { id: 'Breast pain or lumps', label: 'Breast pain / lumps 🍒' },
      { id: 'Abdominal or pelvic pain', label: 'Abdominal / pelvic pain 🩺' },
      { id: 'Unusual fatigue or dizziness', label: 'Unusual fatigue 🔋' },
      { id: 'Nausea or vomiting', label: 'Nausea / vomiting 🤢' },
      { id: 'Mood swings or anxiety', label: 'Mood swings / anxiety 🎭' }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('health'); // 'health', 'chat', 'about'
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [waterLitres, setWaterLitres] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: 'sakhie',
      text: 'Namaste! I am Sakhie, your empathetic companion for women\'s health and wellness. Select symptoms above or ask me anything privately.'
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
    const topicPrompt = `I would like to learn more about ${topicTitle}. What key things should I know?`;
    setInput(topicPrompt);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() && selectedSymptoms.length === 0 && waterLitres === 0) return;

    const userText = input;
    const currentSymptoms = [...selectedSymptoms];
    if (waterLitres > 0) {
      currentSymptoms.push(`Water Hydration: ${waterLitres}L / 2.25L`);
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
        setMessages((prev) => [...prev, { sender: 'sakhie', text: `Service Notice: ${data.detail || 'Unable to connect'}` }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'sakhie', text: 'Sakhie backend server is currently offline.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F5EC', color: '#2D3B36', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 60px', backgroundColor: '#F7F5EC', borderBottom: '1px solid #EBE8DF', sticky: 'top', top: 0, zIndex: 10 }}>
        
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} 
          onClick={() => {
            setActiveTab('health');
            setSelectedTopic(null);
          }}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#9A7BF0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '15px', boxShadow: '0 2px 6px rgba(154, 123, 240, 0.3)' }}>
            🪷
          </div>
          <span style={{ fontSize: '24px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', color: '#2D3B36', letterSpacing: '-0.3px' }}>
            Sakhie
          </span>
        </div>

        <div style={{ backgroundColor: '#EBE8DF', padding: '4px', borderRadius: '30px', display: 'flex', gap: '4px', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)' }}>
          <button
            onClick={() => {
              setActiveTab('health');
              setSelectedTopic(null);
            }}
            style={{
              padding: '8px 24px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeTab === 'health' ? '#2D3B36' : 'transparent',
              color: activeTab === 'health' ? '#FFFFFF' : '#5A6B65',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Health
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            style={{
              padding: '8px 24px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeTab === 'chat' ? '#2D3B36' : 'transparent',
              color: activeTab === 'chat' ? '#FFFFFF' : '#5A6B65',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Chat
          </button>
          <button
            onClick={() => setActiveTab('about')}
            style={{
              padding: '8px 24px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeTab === 'about' ? '#2D3B36' : 'transparent',
              color: activeTab === 'about' ? '#FFFFFF' : '#5A6B65',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            About
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button style={{ border: 'none', background: 'none', fontSize: '14px', color: '#2D3B36', cursor: 'pointer', fontWeight: '500' }}>
            🌐 EN ▾
          </button>
          <button style={{ backgroundColor: '#2D3B36', color: '#FFF', border: 'none', padding: '10px 24px', borderRadius: '25px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 2px 6px rgba(45,59,54,0.15)' }}>
            Sign in
          </button>
        </div>
      </header>

      {/* Main View: Health Guides */}
      {activeTab === 'health' && (
        <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
          
          {/* Grid View */}
          {!selectedTopic ? (
            <>
              <div style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '50px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '400', margin: '0 0 14px 0', color: '#2D3B36', letterSpacing: '-0.5px' }}>
                  Explore your health, <span style={{ fontStyle: 'italic', color: '#8B5CF6' }}>gently</span>
                </h1>
                <p style={{ fontSize: '16px', color: '#5A6B65', margin: 0, maxWidth: '640px', lineHeight: '1.6' }}>
                  Choose a topic to begin. Each guide explains the essentials and helps you know when to seek professional care.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
                {HEALTH_TOPICS.map((topic) => (
                  <div
                    key={topic.id}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setOpenFaqIndex(null);
                    }}
                    style={{
                      backgroundColor: topic.bgColor,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid rgba(0,0,0,0.03)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                    }}
                  >
                    <div style={{ height: '160px', width: '100%', overflow: 'hidden', position: 'relative' }}>
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
                          width: '30px', 
                          height: '30px', 
                          borderRadius: '50%', 
                          backgroundColor: 'rgba(255,255,255,0.9)', 
                          backdropFilter: 'blur(4px)',
                          display: 'flex', 
                          alignItems: 'center', 
                          justify: 'center', 
                          fontSize: '14px', 
                          color: '#2D3B36',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      >
                        ↗
                      </div>
                    </div>

                    <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '50%',
                              backgroundColor: topic.iconBg,
                              color: topic.iconColor,
                              display: 'flex',
                              alignItems: 'center',
                              justify: 'center',
                              fontSize: '14px',
                              fontWeight: '600'
                            }}
                          >
                            {topic.icon}
                          </div>
                          <h3 style={{ fontSize: '20px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', margin: 0, color: '#2D3B36' }}>
                            {topic.title}
                          </h3>
                        </div>
                        <p style={{ fontSize: '13px', color: '#5A6B65', margin: 0, lineHeight: '1.5' }}>
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            
            /* Enhanced Topic Detail View */
            <div style={{ maxWidth: '880px', margin: '0 auto' }}>
              <button
                onClick={() => setSelectedTopic(null)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '14px',
                  color: '#5A6B65',
                  cursor: 'pointer',
                  marginBottom: '24px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                ← Back to Health Topics
              </button>

              <h1 style={{ fontSize: '50px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '500', margin: '0 0 16px 0', color: '#2D3B36', letterSpacing: '-0.5px' }}>
                {selectedTopic.title}
              </h1>

              <p style={{ fontSize: '17px', color: '#5A6B65', lineHeight: '1.65', marginBottom: '28px' }}>
                {selectedTopic.fullDescription}
              </p>

              {/* Quick Facts Pill Bar */}
              {selectedTopic.quickFacts && (
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                  {selectedTopic.quickFacts.map((fact, idx) => (
                    <div key={idx} style={{ backgroundColor: '#EBE8DF', color: '#2D3B36', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>📌</span> {fact}
                    </div>
                  ))}
                </div>
              )}

              {/* In This Guide Section */}
              <div 
                style={{ 
                  backgroundColor: '#FAF8F0', 
                  borderRadius: '24px', 
                  padding: '32px', 
                  marginBottom: '28px', 
                  border: '1px solid #EBE8DF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '24px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', margin: 0, color: '#2D3B36' }}>
                    In this guide
                  </h2>
                  <span style={{ fontSize: '12px', backgroundColor: '#E5EAD4', color: '#2D3B36', padding: '4px 12px', borderRadius: '12px', fontWeight: '600' }}>
                    Medical Reviewer Verified
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {selectedTopic.guidePoints.map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
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
                          fontSize: '13px', 
                          fontWeight: 'bold',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        ✓
                      </div>
                      <span style={{ fontSize: '15px', color: '#2D3B36', fontWeight: '500', lineHeight: '1.5' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Advisory: When to Seek Medical Care */}
              {selectedTopic.redFlags && (
                <div 
                  style={{ 
                    backgroundColor: '#FFF5F2', 
                    borderRadius: '24px', 
                    padding: '28px 32px', 
                    marginBottom: '28px', 
                    border: '1px solid #F3D2C6'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', margin: '0 0 14px 0', color: '#9C382A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🩺 When to consult a specialist
                  </h3>
                  <p style={{ fontSize: '13px', color: '#7C4A42', margin: '0 0 14px 0', fontWeight: '500' }}>
                    While mild variations are normal, seek prompt medical evaluation if you experience:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedTopic.redFlags.map((flag, idx) => (
                      <li key={idx} style={{ fontSize: '14px', color: '#5A2E27', lineHeight: '1.5' }}>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Frequently Asked Questions Section */}
              {selectedTopic.faqs && (
                <div style={{ backgroundColor: '#FAF8F0', borderRadius: '24px', padding: '32px', marginBottom: '32px', border: '1px solid #EBE8DF' }}>
                  <h3 style={{ fontSize: '22px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', margin: '0 0 20px 0', color: '#2D3B36' }}>
                    Frequently Asked Questions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {selectedTopic.faqs.map((faq, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '16px', border: '1px solid #EBE8DF', cursor: 'pointer' }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600', fontSize: '15px', color: '#2D3B36' }}>
                          <span>{faq.q}</span>
                          <span style={{ fontSize: '18px', color: '#9A7BF0' }}>{openFaqIndex === idx ? '−' : '+'}</span>
                        </div>
                        {openFaqIndex === idx && (
                          <div style={{ marginTop: '12px', fontSize: '14px', color: '#5A6B65', lineHeight: '1.6', borderTop: '1px solid #F0ECE1', paddingTop: '10px' }}>
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ask Sakhie Banner */}
              <div 
                style={{ 
                  backgroundColor: '#F5E2EA', 
                  borderRadius: '24px', 
                  padding: '32px 40px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'space-between',
                  boxShadow: '0 4px 12px rgba(245, 226, 234, 0.5)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', margin: '0 0 6px 0', color: '#2D3B36' }}>
                    Have a question about this?
                  </h3>
                  <p style={{ fontSize: '14px', color: '#5A6B65', margin: 0 }}>
                    Sakhie can talk it through with you privately in any language.
                  </p>
                </div>
                <button
                  onClick={() => handleAskSakhie(selectedTopic.title)}
                  style={{
                    backgroundColor: '#2D3B36',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '30px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 8px rgba(45,59,54,0.2)'
                  }}
                >
                  Ask Sakhie →
                </button>
              </div>

            </div>
          )}

        </main>
      )}

      {/* About Page View ("Our Story") */}
      {activeTab === 'about' && (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 90px 24px' }}>
          
          <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9A7BF0', fontWeight: '700', marginBottom: '16px' }}>
            Our Story
          </div>

          <h1 style={{ fontSize: '56px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '400', color: '#2D3B36', margin: '0 0 24px 0', maxWidth: '800px', lineHeight: '1.12', letterSpacing: '-0.5px' }}>
            Built for the women who <span style={{ fontStyle: 'italic', color: '#9A7BF0' }}>care</span> for everyone else
          </h1>

          <p style={{ fontSize: '17px', color: '#5A6B65', lineHeight: '1.65', maxWidth: '640px', marginBottom: '50px' }}>
            Sakhie comes from the word “sakhi” — a close friend and confidante. We are building the companion we wish our mothers, sisters and friends had always had.
          </p>

          {/* 3 Pillar Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '50px' }}>
            
            <div style={{ backgroundColor: '#FAF8F0', borderRadius: '24px', padding: '40px 32px', border: '1px solid #EBE8DF', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '14px', color: '#9A7BF0', fontWeight: '700', backgroundColor: '#EBE4F4', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>01</div>
              <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', color: '#2D3B36', margin: 0 }}>
                Warmth first
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6B65', lineHeight: '1.6', margin: 0 }}>
                We speak to you the way a caring friend would — never clinical, never condescending.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F0', borderRadius: '24px', padding: '40px 32px', border: '1px solid #EBE8DF', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '14px', color: '#9A7BF0', fontWeight: '700', backgroundColor: '#EBE4F4', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>02</div>
              <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', color: '#2D3B36', margin: 0 }}>
                Evidence always
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6B65', lineHeight: '1.6', margin: 0 }}>
                Our guidance is grounded in current medical research and reviewed by qualified healthcare professionals.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F0', borderRadius: '24px', padding: '40px 32px', border: '1px solid #EBE8DF', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '14px', color: '#9A7BF0', fontWeight: '700', backgroundColor: '#EBE4F4', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>03</div>
              <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', color: '#2D3B36', margin: 0 }}>
                Your privacy, protected
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6B65', lineHeight: '1.6', margin: 0 }}>
                Health is personal. We collect only what we need and never sell your personal information.
              </p>
            </div>

          </div>

          {/* Medical Integrity Pledge */}
          <div style={{ backgroundColor: '#E5EAD4', borderRadius: '24px', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '22px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', margin: '0 0 8px 0', color: '#2D3B36' }}>
                Reviewed by Women's Health Specialists
              </h3>
              <p style={{ fontSize: '14px', color: '#4A5B55', margin: 0, lineHeight: '1.6' }}>
                Sakhie AI responses follow conservative non-diagnostic clinical boundaries and are regularly reviewed against guidelines from the American College of Obstetricians and Gynecologists (ACOG) and Indian Council of Medical Research (ICMR).
              </p>
            </div>
            <button 
              onClick={() => setActiveTab('chat')}
              style={{ backgroundColor: '#2D3B36', color: '#FFF', border: 'none', padding: '12px 26px', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}
            >
              Start Chatting
            </button>
          </div>

        </main>
      )}

      {/* Interactive Chat Workspace View */}
      {activeTab === 'chat' && (
        <main style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 20px 60px 20px' }}>
          
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '24px', marginBottom: '24px', border: '1px solid #EBE8DF', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: '#2D3B36', fontWeight: '600' }}>
                Log Today's Symptoms & Metrics:
              </h3>
              <input
                type="text"
                placeholder="🔍 Search symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #E5E2D8', fontSize: '12px', width: '200px', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#EBF4F6', padding: '12px 20px', borderRadius: '16px', marginBottom: '18px' }}>
              <span style={{ fontSize: '22px' }}>💧</span>
              <div style={{ fontSize: '13px', color: '#2D3B36' }}>
                <strong>Hydration Intake:</strong> {waterLitres} / 2.25 Litres
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                <button onClick={() => adjustWater(-0.25)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'none', backgroundColor: '#D4E8ED', cursor: 'pointer', fontWeight: 'bold', color: '#2D3B36' }}>-</button>
                <button onClick={() => adjustWater(0.25)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'none', backgroundColor: '#D4E8ED', cursor: 'pointer', fontWeight: 'bold', color: '#2D3B36' }}>+</button>
              </div>
            </div>

            <div style={{ maxHeight: '210px', overflowY: 'auto' }}>
              {SYMPTOM_CATEGORIES.map((cat, idx) => {
                const filteredItems = cat.items.filter((item) =>
                  item.label.toLowerCase().includes(searchQuery.toLowerCase())
                );
                if (filteredItems.length === 0) return null;

                return (
                  <div key={idx} style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', color: '#7A8A85', marginBottom: '8px' }}>{cat.category}</div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {filteredItems.map((sym) => {
                        const isSelected = selectedSymptoms.includes(sym.id);
                        return (
                          <button
                            key={sym.id}
                            onClick={() => toggleSymptom(sym.id)}
                            style={{
                              padding: '7px 14px',
                              borderRadius: '18px',
                              border: 'none',
                              backgroundColor: isSelected ? '#9A7BF0' : '#E5EAD4',
                              color: isSelected ? '#FFFFFF' : '#2D3B36',
                              cursor: 'pointer',
                              fontSize: '12px',
                              fontWeight: isSelected ? '600' : '500',
                              transition: 'all 0.15s ease'
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

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '24px', height: '380px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', border: '1px solid #EBE8DF', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '78%' }}>
                <div
                  style={{
                    padding: '14px 18px',
                    borderRadius: '20px',
                    backgroundColor: msg.sender === 'user' ? '#2D3B36' : '#F5E2EA',
                    color: msg.sender === 'user' ? '#FFFFFF' : '#2D3B36',
                    fontSize: '14px',
                    lineHeight: '1.55',
                    whiteSpace: 'pre-wrap',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                  }}
                >
                  <strong style={{ opacity: 0.85 }}>{msg.sender === 'user' ? 'You' : 'Sakhie Assistant'}</strong>
                  <div style={{ marginTop: '4px' }}>{msg.text}</div>
                </div>
              </div>
            ))}
            {loading && <div style={{ color: '#8B5CF6', fontStyle: 'italic', fontSize: '13px', paddingLeft: '8px' }}>Sakhie is analyzing your request...</div>}
          </div>

          <form onSubmit={handleSend} style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sakhie about your health or symptoms in any language..."
              style={{ flex: 1, padding: '16px 24px', borderRadius: '30px', border: '1px solid #E5E2D8', outline: 'none', fontSize: '14px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '0 30px', backgroundColor: '#2D3B36', color: '#FFFFFF', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: '600', fontSize: '14px', boxShadow: '0 2px 8px rgba(45,59,54,0.15)' }}
            >
              Send
            </button>
          </form>

        </main>
      )}

    </div>
  );
}