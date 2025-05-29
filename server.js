const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/info', (req, res) => {
  const cpus = os.cpus();
  const systemInfo = {
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    arch: os.arch(),
    uptime: os.uptime(),
    cpu: cpus && cpus.length > 0 ? cpus[0].model : 'Unknown',
    cores: cpus ? cpus.length : 0,
    memory: {
      total: os.totalmem(),
      free: os.freemem(),
    },
    loadavg: os.loadavg(),
    network: os.networkInterfaces()
  };

  res.json(systemInfo);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Class XI running on port ${PORT}`);
});