import React from 'react'

const WatchList = () => {
  return (
    <>


          <div className='flex justify-center items-center flex-wrap mt-5 gap-3'>
            <div className='bg-blue-300 rounded-xl h-[3rem] w-[9rem] flex items-center justify-center cursor-pointer'>
              Action
            </div>

            <div className='bg-gray-400 rounded-xl  h-[3rem] w-[9rem] flex items-center justify-center cursor-pointer'>
              Drama
            </div>
          </div>

      <div className='flex justify-center my-10'>
        <input type="text" className='h-[3rem] w-[17rem] bg-slate-200 outline-none px-3' placeholder='Search for movies' />
      </div>


      <div className="overflow-hidden rounded-lg border border-gray-100 m-5">
  <table className="w-full text-gray-500 text-center">
    {/* Table Header */}
    <thead className="border-b-2 hidden md:table-header-group">
      <tr>
        <th className="p-2">Name</th>
        <th className="p-2">Rating</th>
        <th className="p-2">Popularity</th>
        <th className="p-2">Genre</th>
        <th className="p-2">Actions</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      <tr className="border-b-2 flex flex-col md:table-row text-left md:text-center">
        
        {/* Name and Image */}
        <td className="flex items-center justify-center p-4 md:table-cell">
          <div className="flex items-center">
            <img
              className="h-20 w-32 object-cover rounded-md md:h-[6rem] md:w-[10rem]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKWaM2Ur0GgyvXQLfPw4KaJN2myhoG-NBlg&s"
              alt="The Avengers"
            />
            {/* Name Label for Small Screens */}
            <div className="ml-4">
              <div className="font-bold md:hidden">Name</div>
              The Avengers
            </div>
          </div>
        </td>

        {/* Rating */}
        <td className="flex justify-between md:table-cell p-4">
          <div className="font-bold md:hidden">Rating</div>
          8.5
        </td>

        {/* Popularity */}
        <td className="flex justify-between md:table-cell p-4">
          <div className="font-bold md:hidden">Popularity</div>
          9
        </td>

        {/* Genre */}
        <td className="flex justify-between md:table-cell p-4">
          <div className="font-bold md:hidden">Genre</div>
          Action
        </td>

        {/* Actions */}
        <td className="flex justify-between md:table-cell text-red-500 cursor-pointer p-4">
          <div className="font-bold md:hidden">Actions</div>
          Delete
        </td>
      </tr>
    </tbody>
  </table>
</div>







    </>
  )
}

export default WatchList
