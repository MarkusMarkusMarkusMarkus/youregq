import React, { useState } from 'react';
import { CheckCircle2, Circle, Award, Brain, Users, Zap } from 'lucide-react';

const EgregoreDiversityQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'subcultures',
      question: 'How many distinct communities do you actively participate in?',
      options: [
        { value: 0, label: '1 primary community', points: 0 },
        { value: 1, label: '2-3 communities', points: 1 },
        { value: 2, label: '4-6 communities', points: 2 },
        { value: 3, label: '7+ communities', points: 3 }
      ],
      examples: 'Examples: Professional networks, hobby groups, online communities, religious/spiritual groups, political movements, artistic scenes, gaming communities'
    },
    {
      id: 'code_switching',
      question: 'Do you change how you communicate in different social contexts?',
      options: [
        { value: 0, label: 'I communicate the same way everywhere', points: 0 },
        { value: 1, label: 'I make minor adjustments', points: 1 },
        { value: 2, label: 'I adjust significantly based on context', points: 2 },
        { value: 3, label: 'I use completely different communication styles', points: 3 }
      ]
    },
    {
      id: 'belief_systems',
      question: 'How many different worldviews do you feel you understand deeply?',
      options: [
        { value: 0, label: '1 worldview', points: 0 },
        { value: 1, label: '2-3 worldviews', points: 1 },
        { value: 2, label: '4-6 worldviews', points: 2 },
        { value: 3, label: '7+ worldviews', points: 3 }
      ],
      examples: 'Examples: Political ideologies, religious frameworks, philosophical traditions, cultural value systems, professional paradigms'
    },
    {
      id: 'translation',
      question: 'How often do you help people from different backgrounds understand each other?',
      options: [
        { value: 0, label: 'Never or almost never', points: 0 },
        { value: 1, label: 'Occasionally', points: 1 },
        { value: 2, label: 'Regularly', points: 2 },
        { value: 3, label: 'This is a central part of what I do', points: 3 }
      ]
    },
    {
      id: 'sacred_values',
      question: 'When you enter a new social space, how aware are you of unspoken rules and values?',
      options: [
        { value: 0, label: 'I usually miss these until someone corrects me', points: 0 },
        { value: 1, label: 'I notice them after spending time there', points: 1 },
        { value: 2, label: 'I pick them up fairly quickly', points: 2 },
        { value: 3, label: 'I can identify them almost immediately', points: 3 }
      ]
    },
    {
      id: 'status_games',
      question: 'How well do you understand what gives people status in different groups?',
      options: [
        { value: 0, label: 'Status dynamics are opaque to me', points: 0 },
        { value: 1, label: 'I understand them in my main community', points: 1 },
        { value: 2, label: 'I understand them in several communities', points: 2 },
        { value: 3, label: 'I quickly map them in new communities', points: 3 }
      ]
    },
    {
      id: 'identity_flexibility',
      question: 'How consistent is your self-presentation across different contexts?',
      options: [
        { value: 0, label: 'Very consistent - I\'m the same everywhere', points: 0 },
        { value: 1, label: 'Mostly consistent with small variations', points: 1 },
        { value: 2, label: 'I emphasize different parts of myself', points: 2 },
        { value: 3, label: 'I present quite differently in different contexts', points: 3 }
      ]
    },
    {
      id: 'terminology',
      question: 'How many specialized vocabularies or jargons do you use regularly?',
      options: [
        { value: 0, label: '0-1 specialized vocabularies', points: 0 },
        { value: 1, label: '2-3 specialized vocabularies', points: 1 },
        { value: 2, label: '4-6 specialized vocabularies', points: 2 },
        { value: 3, label: '7+ specialized vocabularies', points: 3 }
      ],
      examples: 'Examples: Academic disciplines, professional fields, internet subcultures, spiritual traditions, technical domains, hobby communities'
    },
    {
      id: 'pattern_recognition',
      question: 'How often do you notice that different groups are discussing similar issues with different terminology?',
      options: [
        { value: 0, label: 'Rarely - each discussion seems distinct', points: 0 },
        { value: 1, label: 'Sometimes', points: 1 },
        { value: 2, label: 'Often', points: 2 },
        { value: 3, label: 'Very frequently', points: 3 }
      ]
    },
    {
      id: 'boundary_crossing',
      question: 'How frequently do you share ideas from one community with another?',
      options: [
        { value: 0, label: 'Rarely or never', points: 0 },
        { value: 1, label: 'Occasionally', points: 1 },
        { value: 2, label: 'Regularly', points: 2 },
        { value: 3, label: 'Very frequently', points: 3 }
      ]
    },
    {
      id: 'meta_awareness',
      question: 'While participating in a community, how aware are you of its norms and assumptions?',
      options: [
        { value: 0, label: 'Not very - I\'m usually fully immersed', points: 0 },
        { value: 1, label: 'Somewhat aware', points: 1 },
        { value: 2, label: 'Quite aware', points: 2 },
        { value: 3, label: 'Constantly aware', points: 3 }
      ]
    },
    {
      id: 'empathy_range',
      question: 'How readily can you understand perspectives of people with very different values?',
      options: [
        { value: 0, label: 'With great difficulty', points: 0 },
        { value: 1, label: 'With some effort', points: 1 },
        { value: 2, label: 'Fairly easily', points: 2 },
        { value: 3, label: 'Very easily', points: 3 }
      ]
    }
  ];

  const handleAnswer = (questionId, points) => {
    setAnswers({ ...answers, [questionId]: points });
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, points) => sum + points, 0);
  };

  const getResults = () => {
    const score = calculateScore();
    const maxScore = questions.length * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage >= 85) {
      return {
        title: 'Hyperdimensional Navigator',
        description: 'You are exceptionally fluent across multiple reality tunnels. You can translate between incompatible worldviews, see patterns across domains, and maintain meta-awareness while fully participating. You likely serve as a bridge between communities and may experience the world as unusually multifaceted.',
        color: 'bg-purple-500',
        icon: Zap
      };
    } else if (percentage >= 70) {
      return {
        title: 'Egregoric Polyglot',
        description: 'You navigate multiple belief systems comfortably and can shift between them strategically. You understand that different groups live in different realities and can participate authentically in several. Your main limitation is bandwidth - there are only so many communities you can actively engage with.',
        color: 'bg-blue-500',
        icon: Brain
      };
    } else if (percentage >= 50) {
      return {
        title: 'Cross-Cultural Traveler',
        description: 'You can move between a few different communities and understand that worldviews vary. You\'re building the skill of code-switching and pattern recognition. To increase diversity, try spending time in communities that feel foreign or uncomfortable to you.',
        color: 'bg-green-500',
        icon: Users
      };
    } else if (percentage >= 30) {
      return {
        title: 'Single Egregore Specialist',
        description: 'You\'re deeply embedded in one or two communities with strong fluency in their norms and language. This depth is valuable, but you may benefit from exposure to radically different worldviews. Try lurking (then participating) in communities whose values seem alien.',
        color: 'bg-yellow-500',
        icon: Circle
      };
    } else {
      return {
        title: 'Monocultural Inhabitant',
        description: 'You primarily operate within a single reality tunnel. This can provide stability and deep roots, but may limit your ability to understand or communicate with people from different backgrounds. Consider this an invitation to explore - start by reading, listening, and observing communities different from your own.',
        color: 'bg-gray-500',
        icon: Circle
      };
    }
  };

  const allAnswered = Object.keys(answers).length === questions.length;
  const results = showResults ? getResults() : null;
  const score = calculateScore();
  const maxScore = questions.length * 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Egregoric Diversity Quotient
          </h1>
          <p className="text-xl text-purple-200">
            How many collective realities can you navigate?
          </p>
          <p className="text-sm text-purple-300 mt-2">
            Higher diversity = better cognitive flexibility across belief systems
          </p>
        </div>

        {!showResults ? (
          <div className="space-y-8">
            {questions.map((q, idx) => (
              <div key={q.id} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl font-bold text-purple-300">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {q.question}
                    </h3>
                    {q.examples && (
                      <p className="text-sm text-purple-200 mb-4 italic">
                        {q.examples}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 ml-10">
                  {q.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(q.id, option.points)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        answers[q.id] === option.points
                          ? 'bg-purple-500 text-white shadow-lg scale-105'
                          : 'bg-white/5 text-purple-100 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {answers[q.id] === option.points ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                        <span>{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {allAnswered && (
              <button
                onClick={() => setShowResults(true)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                Calculate My EDQ Score
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <div className={`${results.color} rounded-lg p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <results.icon className="w-12 h-12" />
                <div>
                  <h2 className="text-3xl font-bold">{results.title}</h2>
                  <p className="text-xl opacity-90">
                    Score: {score}/{maxScore} ({Math.round((score/maxScore)*100)}%)
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                {results.description}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Understanding Your Score</h3>
              <div className="space-y-3 text-purple-100">
                <p>
                  <strong className="text-purple-300">Egregoric diversity</strong> measures your ability to fluently navigate multiple collective belief systems (egregores). Each community creates its own reality through shared language, values, and assumptions.
                </p>
                <p>
                  <strong className="text-purple-300">Why it matters:</strong> In a fragmented information landscape, the ability to translate between worldviews, recognize universal patterns, and maintain meta-awareness while participating is increasingly valuable.
                </p>
                <p>
                  <strong className="text-purple-300">Trade-offs:</strong> High diversity can create identity diffusion, lack of deep community roots, or difficulty fully committing. Low diversity provides stability and depth but may limit perspective-taking and communication range.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Your Score Breakdown</h3>
              <div className="space-y-2">
                {questions.map((q, idx) => (
                  <div key={q.id} className="flex items-center gap-3">
                    <span className="text-purple-300 font-mono text-sm w-6">
                      {idx + 1}.
                    </span>
                    <div className="flex-1 bg-white/5 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all"
                        style={{ width: `${(answers[q.id] / 3) * 100}%` }}
                      />
                    </div>
                    <span className="text-purple-200 font-mono text-sm w-12 text-right">
                      {answers[q.id]}/3
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setShowResults(false);
                setAnswers({});
              }}
              className="w-full bg-white/10 text-white text-lg font-semibold py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EgregoreDiversityQuiz;