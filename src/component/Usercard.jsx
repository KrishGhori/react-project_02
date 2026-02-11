const Usercard = (props) => {
  return (
    <div className='h-[450px] items-center w-[400px] flex-wrap flex-col justify-center rounded-md m-6 ml-7 ' >
        <p className='text-center text-3xl mt-4'>{props.name}</p>
        <div className='h-48 w-full flex items-center justify-center mt-14'>
           <img  src={props.image} className=' h-full w-auto object-contain rounded-md '/>
        </div>
        <p className='text-center text-3xl mt-28'>Description of {props.name}</p>
    </div>
  )
}

export default Usercard
