export const BaseWidget = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col size-48 border p-4 gap-2 text-lg font-semibold">
      <h1>{name}</h1>
      <div className="flex flex-1 items-center justify-center font-bold text-3xl">
        {children}
      </div>
    </div>
  );
};
