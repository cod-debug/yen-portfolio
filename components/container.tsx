export default function Container({children, className = ""}: {
  children: React.ReactNode;
  className?: string;
}){
    return(
        <div className={`container mx-auto max-w-7xl pt-16 px-10 flex-grow ${className}`}>
            {children}
        </div>
    )
}