"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
};

const Teams: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        setError("Failed to fetch team members");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="text-gray-500 h-screen text-center content-center text-7xl ">
        Sabar...
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center h-screen bg-[#FFF455]">
      <h1 className="text-3xl mb-4 text-center py-8">Our Team</h1>
      <Carousel>
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center py-2"
          >
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-[20px] mb-4 w-32 h-32"
            />
            <h2 className="text-xl font-bold">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Teams;
