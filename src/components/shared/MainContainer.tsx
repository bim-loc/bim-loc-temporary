interface ContainerProps {
    children: React.ReactNode;
    className?: string; 
}

export const MainContainer = ({children, className = ""}: ContainerProps) => {
    return (
        <div className={`card bg-gray-200 w-full rounded-none p-1 ${className}`}>
            {children}
        </div>
    )
}