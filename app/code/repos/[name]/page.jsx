import React from 'react'
import Repo from '@/app/components/Repo'
import Link from 'next/link'
import RepoDirs from '@/app/components/RepoDirs'
import { Suspense } from 'react'


const RepoPage = ({ params }) => {
  return (
    <div className='card'>
        <Link className='btn btn-back'  href='/code/repos'>Back To Repositories</Link>
        <Suspense fallback={<div>Loading repo...</div>}>
            <Repo name={params.name} />
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
            <RepoDirs name={params.name} />
        </Suspense>
    </div>
  )
}

export default RepoPage


// import React from 'react'

// const RepoPage = ({ params: { name } }) => {
//   return (
//     <div className='card'>
//         <h2>{name}</h2>
//     </div>
//   )
// }

// export default RepoPage