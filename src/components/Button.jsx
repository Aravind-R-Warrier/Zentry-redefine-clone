import React from 'react'

function Button({title,id,leftIcon,rightIcon,containerClass}) {
  return (
    <div>
      <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClass}`}>
        {rightIcon}

        <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
          <div>
            {title}
          </div>
        </span>
      </button>
    </div>
  )
}

export default Button
