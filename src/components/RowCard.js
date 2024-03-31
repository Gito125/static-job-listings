import React from 'react'

const RowCard = ({data,handleListFilter}) => {
  let isFeatured
  if (data.featured) {
    isFeatured = `border-l-4 border-l-primary-400`
  } else {
    isFeatured = ''
  }

  const languages = data.languages
  const tools = data.tools

  return(
  <>
    <div className={`my-16 mt-32 md:my-10 md:mb-5 rounded-md bg-gray-50 shadow-md shadow-primary-400 flex flex-col md:flex-row justify-between items-center p-5 ${isFeatured}`}>
      <div className="description flex flex-col sm:flex-row justify-between items-center relative">
        <img src={data.logo} className='logo w-28 shadow-md rounded-full shadow-primary-400 md:shadow-none ml-3 mr-4 absolute sm:relative -top-32 sm:top-0' alt={`${data.company}Img`} />

        <div className="details">

          <div className="flex justify-between items-center mb-2">
            <p className="text-primary-300 font-bold mr-3">{data.company}</p>
            {data.new && <div className="pill p-1 text-white text-xs bg-primary-300 rounded-full mr-3">NEW!</div>}
            {data.featured && <div className="pill p-1 text-white text-xs bg-black rounded-full mr-3">FEATURED</div>}
          </div>

          <p className='font-bold text-primary-300 mb-2'>{data.position}</p>

          <div className="flex justify-between items-center">
            <p className="text-gray-400">{data.postedAt}</p>
              <span className='text-gray-400 mx-1'>.</span>
            <p className="text-gray-400">{data.contract}</p>
              <span className='text-gray-400 mx-1'>.</span>
            <p className="text-gray-400">{data.location}</p>
          </div>
        </div>
      </div>

      <div className="filterButtons flex flex-wrap justify-evenly md:justify-end sm:justify-items-start mt-5 md:mt-0 w-full md:w-5/12 items-center border-t-2 md:border-none border-gray-400 pt-5">
        {languages.map((text, i) => (
          <button key={i} onClick={() => handleListFilter('languages',text)} type="button" className='font-semibold p-2 mb-3 ml-2 rounded-md bg-gray-100 text-primary-400 hover:bg-primary-400 hover:text-white'>{text}</button>
        ))}
        {tools.map((text, i) => (
          <button key={i} onClick={() => handleListFilter('tools', text)} type="button" className='font-semibold p-2 mb-3 ml-2 rounded-md bg-gray-100 text-primary-400 hover:bg-primary-400 hover:text-white'>{text}</button>
        ))}
      </div>
    </div>
  </>
)}
export default RowCard