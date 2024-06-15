import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
    if (signupOpen) {
      setSignupOpen(false);
    }
  };

  const toggleSignup = () => {
    setSignupOpen(!signupOpen);
    if (loginOpen) {
      setLoginOpen(false);
    }
  };

  return (
    <nav className="bg-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <Link to="/" className="flex-shrink-0 text-white text-xl font-bold">
              Navbar
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/link"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Link
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleLogin}
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                    aria-expanded={loginOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                  >
                    Login
                  </button>
                  <div
                    className={`${
                      loginOpen ? 'block' : 'hidden'
                    } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                    role="menu"
                  >
                    <div className="py-1" role="none">
                      <Link
                        to="/admin-login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Admin
                      </Link>
                      <Link
                        to="/volunteer-login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Volunteer
                      </Link>
                      <Link
                        to="/vendor-login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Vendor
                      </Link>
                      <Link
                        to="/buyer-login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Buyer
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleSignup}
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                    aria-expanded={signupOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                  >
                    Signup
                  </button>
                  <div
                    className={`${
                      signupOpen ? 'block' : 'hidden'
                    } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                    role="menu"
                  >
                    <div className="py-1" role="none">
                      <Link
                        to="/admin-signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Admin
                      </Link>
                      <Link
                        to="/volunteer-signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Volunteer
                      </Link>
                      <Link
                        to="/vendor-signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Vendor
                      </Link>
                      <Link
                        to="/buyer-signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Buyer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;