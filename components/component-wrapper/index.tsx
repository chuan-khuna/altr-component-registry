export const ComponentWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const gridBackgroundCss =
    'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]'

  return (
    <div
      className={`relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4 ${gridBackgroundCss}`}
    >
      {children}
    </div>
  )
}

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-muted-foreground text-sm sm:pl-3">{children}</h2>
    </div>
  )
}

export const Showcase = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-[400px] items-center justify-center">
      {children}
    </div>
  )
}
