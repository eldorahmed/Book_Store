// logo png 


import { styles } from '../../style'

function Navbar() {
  return (
    <div>
     <div className={`${styles.container} ${styles.paddingX}`}>
        <div className="navbar flex items-center justify-between  ">
  <div className="navbar-start sm:w-[30%] w-[40%] ">
    
    <a className="btn btn-ghost text-xl px-0 w-12 h-12 rounded-full overflow-hidden">
      <img src={''} className='w-full ' alt="img" />
    </a>
  </div>
  {/* search */}
  <div className='sm:w-1/2 w-full '>
  <label className="input rounded-full input-bordered flex items-center gap-2 w-full">
  <input type="text" className="grow w-full rounded-[50px]" placeholder="Search books " />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>
  <div className="navbar-end w-[20%] sm:w-1/2">
  {/* reaction */}
  <div className='sm:flex items-center gap-4 hidden '>
    <p className='flex items-center gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
    Account</p>
    <p className='flex gap-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg> Wishlist

    </p>
  </div>

  {/* telfonda qismiga o'tganda ochiladigan bars */}
  <div className="dropdown dropdown-end sm:hidden">
  <div tabIndex={0} role="button" className="">
  <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-4">
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Blog</a></li>
    <li><a>Contact</a></li>
    <li><a>Books</a></li>
  </ul>
</div>
  </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar