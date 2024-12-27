import React from 'react'

const Header = ({onHandleDark,mode}) => {
    
  return (
    <div className='header container shadow border border-danger p-4 position-fixed'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='header-title fw-bold'>ACMusic</h2>
        <div className='header-content fs-2 d-flex align-items-center g-3'>
            <i class="bi bi-heart"></i>
            <button className='btn fs-2' onClick={()=>onHandleDark()}>
                {mode?<i class="bi bi-moon-fill"></i>:<i class="bi bi-brightness-high-fill"></i>}
            </button>
            <button className='btn btn-outline-success'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Header
