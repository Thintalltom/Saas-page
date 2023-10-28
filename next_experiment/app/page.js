import Image from 'next/image'
import Show from './Show'
import Work from './Home'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['100', '300', '400', '500'],
  subsets: ['latin'],
  style: ['normal']
})

const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a844195ae0msh1fbee6d2d56602cp18da5djsn5c6202c811c3',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    const data = await fetch(url, options);
    const res =await data.json();
    console.log(res)


export default function Home() {
  return (
    <main className={poppins.className}>
        <Work />
      <div className='grid grid-cols-4 gap-4'>
    
       {/*to map you need to add .result in order to make it work which is why there is res.result */}
       {res.results.map((movies) => (
                    <Show 
                    title={movies.title}
                    released ={movies.released}
                    genre = {movies.genre}
                    synopsis = {movies.synposis}
                    image = {movies.imageurl}
                    />
                ))}
      
      </div>

     
    </main>
  )
}
