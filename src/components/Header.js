import React from 'react'

const Header = ({desktopHeaderBG, mobileHeaderBG, filteredCriteria, handleFilteredCriteria, handleClear}) => {
  let isVisible = false
  if(filteredCriteria[0] === '' || filteredCriteria[0] === null || filteredCriteria[0] === undefined) {
    isVisible = false
  } else {
    isVisible = true
  }

  return (
  <header className='relative bg-primary-400'>
    <img src={desktopHeaderBG} className='hidden sm:block w-full' alt="desktopBackgroundImage" />
    <img src={mobileHeaderBG} className='sm:hidden w-full' alt="mobileBackgroundImage" />

    {isVisible && <nav className='w-full absolute -bottom-8 sm:-bottom-6'> 
      <div className='w-9/12 sm:w-10/12 mx-auto rounded-md shadow-md shadow-primary-400 bg-white p-2 flex justify-between items-center'>
        <div className="filteredCriteria flex flex-wrap justify-items-start md:justify-evenly">
          {filteredCriteria.map(text => (
            <div key={text} className="flex justify-between items-center text-gray-700 w-fit h-fit pl-2 ml-2 my-1 sm:mb-0 bg-gray-100 rounded-md">
              <p className="">{text}</p>
              <button type="button" onClick={() => handleFilteredCriteria(text)} className="filteredCriteria_CloseBtn px-2 py-1 ml-1 bg-primary-300 hover:bg-primary-400 m-auto hover:text-white rounded-r-lg">
                X
              </button>
            </div>
          ))}

        </div>

        <button onClick={handleClear.bind(this, [])} type='button' className="clearFilteredCriteria_Btn mr-4 text-gray-400 ml-4 hover:text-primary-400 hover:underline">
          Clear
        </button>
      </div>
    </nav>}
  </header>
)}

export default Header