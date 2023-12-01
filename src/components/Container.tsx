type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return (
    <main
      className="max-w-3xl mx-auto h-full relative"
      style={{
        minHeight: "calc(100vh - 4rem)",
      }}
    >
      {children}
    </main>
  );
};
