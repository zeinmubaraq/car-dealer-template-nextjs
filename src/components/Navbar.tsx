import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button>
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
                >
                  Team
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
                >
                  Projects
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
                >
                  Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium">
            Dashboard
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium">
            Team
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium">
            Projects
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium">
            Calendar
          </Link>
        </div>
      </div>
    </nav>
  );
}
