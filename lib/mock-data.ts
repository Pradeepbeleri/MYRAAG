export const mockTranscripts = [
  {
    id: '1',
    speaker: 'Alex Chen',
    speakerColor: '#9D4EDD',
    timestamp: '00:00',
    text: "Good morning everyone. Let's start with the product roadmap review for Q3.",
  },
  {
    id: '2',
    speaker: 'Sarah Kim',
    speakerColor: '#00D4FF',
    timestamp: '00:15',
    text: 'I have the latest metrics ready. Our user retention improved by 23% this quarter.',
  },
  {
    id: '3',
    speaker: 'Marcus Powell',
    speakerColor: '#00FF88',
    timestamp: '00:32',
    text: 'Great news! The new onboarding flow is performing exceptionally well.',
  },
  {
    id: '4',
    speaker: 'Alex Chen',
    speakerColor: '#9D4EDD',
    timestamp: '00:48',
    text: "Perfect. Let's dive into the AI feature pipeline. We have voice recognition improvements scheduled.",
  },
  {
    id: '5',
    speaker: 'Sarah Kim',
    speakerColor: '#00D4FF',
    timestamp: '01:05',
    text: 'The latency is down to 14ms which is industry-leading. Users are loving the response speed.',
  },
  {
    id: '6',
    speaker: 'Marcus Powell',
    speakerColor: '#00FF88',
    timestamp: '01:22',
    text: "We should announce this at the upcoming conference. It's a major competitive advantage.",
  },
  {
    id: '7',
    speaker: 'Alex Chen',
    speakerColor: '#9D4EDD',
    timestamp: '01:40',
    text: 'Agreed. Sarah, can you prepare the announcement draft by Friday?',
  },
  {
    id: '8',
    speaker: 'Sarah Kim',
    speakerColor: '#00D4FF',
    timestamp: '01:52',
    text: "Absolutely. I'll have it ready by Thursday EOD for review.",
  },
]

export const mockActionItems = [
  { id: '1', text: 'Sarah to prepare announcement draft by Thursday EOD', priority: 'high', assignee: 'Sarah Kim', due: 'Thursday' },
  { id: '2', text: 'Schedule conference presentation slot', priority: 'medium', assignee: 'Marcus Powell', due: 'Next week' },
  { id: '3', text: 'Finalize Q3 roadmap document', priority: 'high', assignee: 'Alex Chen', due: 'Friday' },
  { id: '4', text: 'Review AI latency benchmarks report', priority: 'low', assignee: 'Team', due: 'Next Monday' },
]

export const mockMeetings = [
  {
    id: '1',
    title: 'Q3 Product Roadmap Review',
    date: '2024-05-15',
    duration: '45 min',
    participants: ['Alex Chen', 'Sarah Kim', 'Marcus Powell'],
    sentiment: 0.85,
    tags: ['product', 'roadmap', 'Q3'],
    summary: 'Reviewed Q3 product roadmap with positive outcomes on retention metrics.',
  },
  {
    id: '2',
    title: 'AI Feature Sprint Planning',
    date: '2024-05-14',
    duration: '30 min',
    participants: ['Marcus Powell', 'Dev Team'],
    sentiment: 0.72,
    tags: ['engineering', 'sprint', 'AI'],
    summary: 'Planned sprint tasks for AI voice recognition improvements.',
  },
  {
    id: '3',
    title: 'Investor Update Call',
    date: '2024-05-13',
    duration: '60 min',
    participants: ['Alex Chen', 'Priya Sharma'],
    sentiment: 0.91,
    tags: ['investor', 'funding', 'growth'],
    summary: 'Positive investor call highlighting 23% user retention improvement.',
  },
  {
    id: '4',
    title: 'Design System Review',
    date: '2024-05-12',
    duration: '20 min',
    participants: ['Sarah Kim', 'Design Team'],
    sentiment: 0.68,
    tags: ['design', 'UI', 'components'],
    summary: 'Reviewed new design system components and typography updates.',
  },
  {
    id: '5',
    title: 'Marketing Campaign Kickoff',
    date: '2024-05-11',
    duration: '35 min',
    participants: ['Sarah Kim', 'Marketing Team'],
    sentiment: 0.88,
    tags: ['marketing', 'campaign', 'launch'],
    summary: 'Kicked off summer marketing campaign strategy and timeline.',
  },
  {
    id: '6',
    title: 'Engineering Architecture Discussion',
    date: '2024-05-10',
    duration: '55 min',
    participants: ['Marcus Powell', 'Backend Team'],
    sentiment: 0.76,
    tags: ['engineering', 'architecture', 'scalability'],
    summary: 'Discussed microservices architecture migration plan.',
  },
]

export const mockCommands = [
  { id: '1', command: 'Schedule meeting with Sarah for tomorrow at 2pm', time: '2m ago', status: 'completed' },
  { id: '2', command: "Summarize last week's engineering standup", time: '15m ago', status: 'completed' },
  { id: '3', command: 'Create task: Review PR #247 before end of day', time: '1h ago', status: 'completed' },
  { id: '4', command: 'Send follow-up email to Marcus about API docs', time: '2h ago', status: 'completed' },
  { id: '5', command: 'Add note: Conference keynote ideas', time: '3h ago', status: 'completed' },
]

export const mockStats = {
  responseTime: 14,
  accuracy: 97,
  productivityBoost: 5,
  hoursSaved: 127,
  meetingsProcessed: 342,
  commandsExecuted: 1847,
}

export const mockSentimentData = [
  { date: 'Mon', score: 0.72 },
  { date: 'Tue', score: 0.85 },
  { date: 'Wed', score: 0.68 },
  { date: 'Thu', score: 0.91 },
  { date: 'Fri', score: 0.88 },
  { date: 'Sat', score: 0.76 },
  { date: 'Sun', score: 0.82 },
]
