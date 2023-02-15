const TextAndIcon = ({ text, icon}) => {
  return (
    <div className='flex items-center gap-1'>
        {icon}
        <div className='flex flex-col items-center'>
            <p className='text-basic- text-xs'>{text}</p>
        </div>
    </div>
  )
}

export default TextAndIcon