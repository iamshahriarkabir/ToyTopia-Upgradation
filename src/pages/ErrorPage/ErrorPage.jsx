import React from 'react';
import { Link, useRouteError } from 'react-router';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error 404');
    const error = useRouteError();
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200">
            <img src="https://cdn.dribbble.com/userupload/21655810/file/original-53876f1815628aa2e4bb9ec4d3571c51.gif" className="w-1/2 max-w-md" />
            <h1 className="text-4xl font-bold mt-8">Oops! Page Not Found</h1>
            <p className="text-gray-600 mt-2">{error.statusText || error.message}</p>
            <Link to="/" className="btn bg-green-400 border-0 hover:text-green-400 hover:bg-black mt-6">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;