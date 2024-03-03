
function Container({children}:{children:React.ReactNode}) {
  return (
      <div className="w-[90%] max-w-lg mx-auto pt-10 md:pt-14">
          {children}
      </div>
  )
}

export default Container