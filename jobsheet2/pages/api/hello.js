export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
    student: {
      name: 'Hammam Abdullah B.G',
      nim: '2341720203',
      program: 'Information Technology'
    },
    endpoints: {
      home: '/',
      about: '/about',
      api: '/api/hello'
    }
  });
}
