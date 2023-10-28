import Link from 'next/link'
export default function Navbar() 
{
    return(
        <div className='p-4'>
           <div className='flex justify-between'>
               <p className='text-red-500'>Watchit</p>
               <div className=" flex justify-around gap-9">
                   <p>Home</p>
                   <Link href={`/About`}>
                   <p>Now Showing</p>
                   </Link>
                  
                   <p>Upcoming</p>
                   <p>About</p>

               </div>

           </div>
        </div>
    )
}