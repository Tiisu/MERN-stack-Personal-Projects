import { Contact, User, Users } from 'lucide-react'
import React from 'react'
import Card from '../components/Card'
import AuthSkeleton from "../components/AuthSkeleton";

function HomePage() {

  const [contacts, setContacts] = React.useState([]);
  const [onlineContacts, setOnlineContacts] = React.useState([]);

  async function fetchContacts() {
    try {
      const response = await fetch('http://localhost:8000/api/message');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  }

  return (
    <div className="flex h-screen ml-15">
      {/* Sidebar for the home */}
      <div className="flex flex-col items-center space-y-2 p-4 border-r w-[30%] h-full">
        {/* Sidebar header */}
        <div className="flex flex-col space-x-2 w-full">
          <div className="flex items-center space-x-2">
            <Users />
            <h2>Contacts</h2>
          </div>
          <div>
            <label>
              <input className="mr-2"
                type="checkbox"
                name="mycheckbox"
                value="option1"
              />
              Show online contacts Only
            </label>
          </div>
        </div>
        {/* Cards list */}
        <div className="w-full flex-1 overflow-y-auto mt-4">
            <Card  />
            <Card  />
            <Card  />
            <Card  />
           
        </div>
      </div>

      {/* Message area */}
      <div className="flex-1 flex flex-col">
        <div className="w-full h-full flex items-center justify-center">
          <AuthSkeleton title={"Welcome to HackChat"} text={"Start Chatting"} />
        </div>
      </div>
    </div>
  )
}

export default HomePage