
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className=" max-w-[1000px]  min-w-4/5 mx-auto my-0 h-screen" {...props}>
        {children}
    </div>
  )
}
