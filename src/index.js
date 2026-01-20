import express from 'express';
const app = express();

// Cloud Run provides the PORT env variable automatically
const PORT = process.env.PORT || 5050;

app.use(express.json());

// This path matches your future Load Balancer rule: /api/*
app.get('/api/test', (req, res) => {
  console.log('Test API called');
  res.json({
    status: "success",
    message: "QueueCare Test Backend is working",
    location: "kochi-india",
    timestamp: new Date().toISOString()
  });
});

// Root path for simple health checks
app.get('/', (req, res) => {
  res.send("Backend is running. Use /api/test for JSON.");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test server listening on port ${PORT}`);
});
