import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("user test is succesful");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send(`Your username is: ${username}`);
});

export default router;
