import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const allInterests = ["Web Development", "Design", "Data Science"];

  const handleCheckboxChange = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Hi, I'm Your Name</h1>
      <img
  src="https://via.placeholder.com/350"
  alt="My profile pic"
/>

      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio.
      </p>
      <ul>
        <li>
          <a href="https://github.com/yourusername">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        </li>
        <li>
          <a href="https://yourportfolio.com">Portfolio</a>
        </li>
      </ul>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email address"
          />
        </label>
        <br />
        {allInterests.map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              checked={interests.includes(interest)}
              onChange={() => handleCheckboxChange(interest)}
            />
            {interest}
          </label>
        ))}
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you, {name}!</h3>
          {interests.length > 0 && <p>Your interests: {interests.join(", ")}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
