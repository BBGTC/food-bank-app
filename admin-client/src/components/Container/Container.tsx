
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[]
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className=" max-w-[1000px] w-4/5 mx-auto my-0 h-screen flex flex-col flex-grow" {...props}>
        {children}
    </div>
  )
}
