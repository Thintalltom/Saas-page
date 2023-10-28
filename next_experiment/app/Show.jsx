
export default function Show({title, image}) 

{
    return(
        <div>
            <div> 
              
                <img src={image} className='w-[300px]' />
                {title}
            </div>
          
        </div>
    )
}