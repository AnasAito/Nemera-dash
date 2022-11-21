/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Popover, Transition } from '@headlessui/react';
import { AcademicCapIcon, SearchIcon } from '@heroicons/react/outline';
import TargetCard from '../components/targetCard';
// import { MagnifyingGlassIcon } from '@heroicons/react/solid';

const navigation = [
  { id: '/targets', name: 'Targets', href: '#', current: true },
  { id: '/spotlight', name: 'Spotlight', href: '#', current: false },
  { id: '/analysis', name: 'Market Analysis', href: '#', current: false },
];
const announcements = [
  {
    id: 1,
    title: 'Integrated Analytical Laboratories',
    href: '#',
    preview:
      'Integrated Analytical Laboratories offers an array of analytical services and solutions to the pharmaceutical and environmental industries.',
  },
  {
    id: 2,
    title: 'Q Laboratories',
    href: '#',
    preview:
      'Q Laboratories is a research company providing development laboratory services.',
  },
  {
    id: 3,
    title: 'Geneva Laboratories',
    href: '#',
    preview:
      'Geneva Laboratories provides quality and affordable testing services to the medical, pharmaceutical and personal care industries.',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [company_id, setCompany_id] = useState(null);
  return (
    <>
      <div className="min-h-full">
        <Popover as="header" className="bg-indigo-600 pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 lg:static">
                    <span className=" text-white font-bold">
                      NEMERA dashboard
                    </span>
                  </div>

                  {/* Search */}
                  <div className="min-w-0 flex-1 px-12 lg:hidden">
                    <div className="mx-auto w-full max-w-xs">
                      <label htmlFor="desktop-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-white focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <AcademicCapIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="desktop-search"
                          className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                          placeholder="Search"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                </div>
                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                  <div className="grid grid-cols-3 items-center gap-8">
                    <div className="col-span-2">
                      <nav className="flex space-x-4">
                        {navigation.map((item) => {
                          let pathname = `${item.id}`;
                          if (item.id == '/spotlight') {
                            pathname = `${item.id}/${company_id}`;
                          }

                          return (
                            <Link
                              key={item.name}
                              to={{
                                pathname: pathname,
                              }}
                              className={classNames(
                                item.current
                                  ? 'text-white font-bold'
                                  : 'text-indigo-100 ',
                                'text-sm font-medium cursor-pointer rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                              )}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </nav>
                    </div>
                    <div>
                      <div className="mx-auto w-full max-w-md">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-white focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <SearchIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="mobile-search"
                            className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Popover>
        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      {' '}
                      <h2
                        className="text-base font-medium text-gray-900"
                        id="announcements-title"
                      >
                        Target Overview
                      </h2>
                      <div className="pt-4">
                        {company_id ? (
                          <TargetCard company_id={company_id} />
                        ) : (
                          <div>No target was choosen </div>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                {/* Your content */}

                {
                  <section aria-labelledby="announcements-title">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="p-6">
                        <h2
                          className="text-base font-medium text-gray-900"
                          id="announcements-title"
                        >
                          Targets
                        </h2>
                        <div className="mt-6 flow-root">
                          <ul
                            role="list"
                            className="-my-5 divide-y divide-gray-200"
                          >
                            {announcements.map((announcement) => (
                              <li
                                onClick={() => setCompany_id(announcement.id)}
                                key={announcement.id}
                                className="py-5"
                              >
                                <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                  <h3 className="text-sm font-semibold text-gray-800">
                                    <a
                                      href={announcement.href}
                                      className="hover:underline focus:outline-none"
                                    >
                                      {/* Extend touch target to entire panel */}
                                      <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                      />
                                      {announcement.title}
                                    </a>
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                    {announcement.preview}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                          >
                            View all
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                }
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
              <span className="block sm:inline">
                &copy; 2022 ALPHA10X, Inc.
              </span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
