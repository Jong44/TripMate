import React from 'react'

const CommentSection = () => {
  return (
    <section className="relative -top-[2rem] py-6 px-8">
          <h4 className="text-3xl font-bold mb-4">What do they say about TripMate?</h4>
          <div className="mt-10 carousel carousel-center flex gap-7">
           {Array.from({ length: 5 }).map((_, index) => (
             <div className="carousel-item" key={index}>
              <div className="px-5 py-6 bg-white rounded-2xl border w-[24rem] h-[20rem] flex flex-col justify-between">
                  <div>
                  <p className="text-5xl font-semibold">"</p>
                  <p className="font-medium text-2xl">"TripMate is the best! I am so happy with the result!"</p>
                  </div>
                  <div className="flex items-center">
                     <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
                      <div className="ml-4">
                          <p className="font-semibold">John Doe</p>
                          <p className="text-gray-500">CEO of Google</p>
                      </div>
                  </div>
              </div>
           </div>
           ))}
          </div>
        </section>
  )
}

export default CommentSection