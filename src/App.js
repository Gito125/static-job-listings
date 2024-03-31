import React, { useState } from 'react'
import './styles/App.css'
import desktopHeaderBG from './assets/images/bg-header-desktop.svg'
import mobileHeaderBG from './assets/images/bg-header-mobile.svg'
import Header from './components/Header'
import RowCard from './components/RowCard'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAINHrUxYJtGjQouabSLJh4V7c02P45TE",
  authDomain: "march-2024-e3b9c.firebaseapp.com",
  projectId: "march-2024-e3b9c",
  storageBucket: "march-2024-e3b9c.appspot.com",
  messagingSenderId: "1072556138574",
  appId: "1:1072556138574:web:26a6ac1570348a73d6e31f",
  measurementId: "G-XYE8X6LK8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const initLists = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Ruby"],
    "tools": ["Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]

const App = () => {
  // state
  const [lists, setLists] = useState(initLists)
  const [filteredCriteria, setFilteredCriteria] = useState([])

  // handlers
  const handleListFilter = (filterType, filterText) => {
    let newList = []
    if(!filteredCriteria.includes(filterText)) {
      filteredCriteria.push(filterText)
      setFilteredCriteria(filteredCriteria)
    }

    if (filterType === 'languages') {
      newList = lists.filter(list => {
        return list.languages.some(language => language === filterText)
      })
      console.log(newList)
    } else if (filterType === 'tools') {
      newList = lists.filter(list => {
        return list.tools.some(tool => tool === filterText)
      })
      console.log(newList)
    }
    
    setLists(newList)
    
  }

  const handleFilteredCriteria = (text) => {
    const newCriteria = filteredCriteria.filter(item => item !== text)
    let newList
    console.log(newCriteria[0])
    
    if (newCriteria[0] === undefined) {
      setLists(initLists)
    } else {
      const languages = ["JavaScript", "Python", "HTML", "CSS", "Ruby", "Python"]
      const tools = ["React", "Sass", "Django", "Vue", "RoR"]
      newCriteria.forEach(criteria => {
        if (languages.includes(criteria)) {
          console.log('gonna filter languages')
          newList = initLists.filter(list => {
            return list.languages.some(language => language === criteria)
          })
          setLists(newList)

        } else if (tools.includes(criteria)) {
          console.log('gonna filter tools')
          newList = initLists.filter(list => {
            return list.tools.some(tool => tool === criteria)
          })
          setLists(newList)
        }
      })

    }


    setFilteredCriteria(newCriteria)
  }

  const handleFilteredCriteria_Clear = () => {
    setFilteredCriteria([])
    setLists(initLists)
  }

  return (
    <>
      {/* Header */}
      <Header desktopHeaderBG={desktopHeaderBG} mobileHeaderBG={mobileHeaderBG} filteredCriteria={filteredCriteria} handleFilteredCriteria={handleFilteredCriteria} handleClear={handleFilteredCriteria_Clear}/>

      {/* Main */}
      <main>
        <div className="container mx-auto mt-40 md:mt-24 w-9/12 sm:w-10/12">
          {lists.map(list => (
            <RowCard key={list.id} data={list} handleListFilter={handleListFilter}/>
          ))}
        </div>
      </main>

    </>
  )
}

export default App