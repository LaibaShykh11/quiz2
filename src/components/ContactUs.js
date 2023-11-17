import React from 'react'

export default function ContactUs() {
  return (
    <section id='contact' className='relative'>
      <form
        netlify
        name='contact'
        className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
      >
        <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
          Hire Me
        </h2>
        <p className='leading-relaxed mb-5'>
          Type your requirements in the message folder.
        </p>
        <div className='flex flex-col md:flex-row mb-4'>
          <label htmlFor='name' className='mr-4 mb-2 md:mb-0'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='flex flex-col md:flex-row mb-4'>
          <label htmlFor='email' className='mr-4 mb-2 md:mb-0'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='flex flex-col md:flex-row mb-4'>
          <label htmlFor='phone' className='mr-4 mb-2 md:mb-0'>
            Phone
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='message' className='mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <button
          style={{ backgroundColor: 'green' }}
          type='submit'
          className='text-white border-0'
        >
          Submit
        </button>
      </form>
    </section>
  )
}
