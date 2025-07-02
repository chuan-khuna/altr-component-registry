export const ComponentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const gridBackgroundCss =
    "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]";

  return (
    <div
      className={`flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative ${gridBackgroundCss}`}
    >
      {children}
    </div>
  );
};

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-sm text-muted-foreground sm:pl-3">{children}</h2>
    </div>
  );
};

export const Showcase = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-[400px] relative">
      {children}
    </div>
  );
};
