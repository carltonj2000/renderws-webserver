const app = require("express")();

const PORT = process.env.PORT || 9999;

app.get("*", (req, res) => {
  res.send(`Hello, from a lite container on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
