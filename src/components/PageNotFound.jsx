function App() {
return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-7xl font-bold text-gray-800 mb-6">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">Sorry, Page Not Found!</h2>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't seem to exist.</p>
                <a
                    href="/"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium 
                    transition-all duration-300 hover:bg-blue-600 hover:shadow-md"
                >
                    Back to Home
                </a>
            </div>
        </div>
    </>
);
}

export default App;
