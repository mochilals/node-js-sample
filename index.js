var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error("🔥 ERROR:", err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/error', (req, res) => {
  throw new Error("Simulated production crash");
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
