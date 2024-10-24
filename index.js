const app = require("./app");
const config = require("./config/config");

PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`app in running on http://localhost:${PORT}`);
});
