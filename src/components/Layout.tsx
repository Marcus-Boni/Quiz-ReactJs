export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-600">
            {children}
        </main>
    )
}