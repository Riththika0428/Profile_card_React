import logo from './logo.svg';
import './App.css';
import React from "react";
import ProfileCard from "./components/profileCard";

function App() {
  const profiles = [
    {
      name: "John",
      age: 28,
      bio: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Asha",
      age: 25,
      bio: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Alex",
      age: 30,
      bio: "Backend Engineer",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Sophia",
      age: 27,
      bio: "Product Manager",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Michael",
      age: 32,
      bio: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      name: "Williams",
      age: 24,
      bio: "Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      name: "David",
      age: 29,
      bio: "Mobile App Developer",
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      name: "Ramya",
      age: 26,
      bio: "Content Creator",
      image: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      name: "Daniel",
      age: 35,
      bio: "DevOps Engineer",
      image: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      name: "Sham",
      age: 23,
      bio: "CS Student",
      image: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
      name: "Chris",
      age: 31,
      bio: "Cloud Architect",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Andria",
      age: 28,
      bio: "QA Engineer",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    }
  ];

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "30px",
    backgroundColor: "#f2f2f2"
  };

  return (
    <div style={containerStyle}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;

