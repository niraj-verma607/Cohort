import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

config();

const app = express();
app.use(morgan("dev")); // Use morgan for logging HTTP requests

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (_, __, profile, done) => {
      return done(null, profile);
    },
  ),
);

// Route to initiate Google OAuth authentication
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/",
  }),
  (req, res) => {
    // Successful authentication, redirect to the desired page or send a response
    console.log(req.user);
    res.send("Authentication successful");
  },
);

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
