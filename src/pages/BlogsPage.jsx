import { useState } from "react"
import Posts from "../components/posts/Posts"
export default function BlogsPage() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <main className="container">
      <div className="flex flex-between-center mb-4">
      <h1 className='page-title text-center text-lg! md:pl-6 text-custom-grey'>Blogs List</h1>
      <input type="text" className="page-search-bar p-1 placeholder:text-custom-grey placeholder:text-sm placeholder:pl-2 placeholder:italic border border-custom-grey-2 rounded-md" placeholder="Search For Blog" onChange={e => setSearchValue(e.target.value)}/>
      </div>
      <Posts searchValue={searchValue}/>
    </main>
  )
}