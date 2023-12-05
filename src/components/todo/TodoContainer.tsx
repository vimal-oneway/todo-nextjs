type TodoContainerProps = {
  children: React.ReactNode;
};

export const TodoContainer = ({ children }: TodoContainerProps) => {
  return <div className="px-5">{children}</div>;
};
