import { Contact, User, Users } from 'lucide-react'
import React from 'react'
import Card from '../components/Card'

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
    <div className='border h-screen'>
      {/* Sidebar for the home */}
      <div >
        {/* Sidebar header goes here */}
        <div className='flex  flex-col items-center space-y-2 p-4 border w-[30%] '>
          <div className='flex  flex-col space-x-2  ' >
            <div className='flex items-center space-x-2'>
              <Users />
              <h2>Contacts</h2>
            </div>
            <div>
              <label>
                <input className='mr-2'
                  type="checkbox"
                  name="mycheckbox"
                  value="option1"
                />
                Show online contacts Only
              </label>
            </div>
          </div>
          <div>
              <Card />
              

            </div>


          <div>

          </div>




        </div>


      </div>

      {/*  message area */}
      <div>

      </div>
    </div>
  )
}

export default HomePage