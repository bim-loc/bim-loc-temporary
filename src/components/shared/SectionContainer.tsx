interface ContainerProps {
    children: React.ReactNode;
    className?: string; 
}

export const SectionContainer = ({children, className = ""}: ContainerProps) => {
    return (
        <div className={`card w-full max-w-5xl rounded-none ${className}`}>
            {children}
        </div>
    )
}