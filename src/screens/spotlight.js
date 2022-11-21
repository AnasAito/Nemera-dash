import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Menu, Popover, Transition } from '@headlessui/react';
import TrendChart from '../components/trendChart';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid';

const navigation = [
  { id: '/targets', name: 'Targets', href: '#', current: false },
  { id: '/spotlight', name: 'Spotlight', href: '#', current: true },
  { id: '/analysis', name: 'Market Analysis', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Stat = ({ item }) => (
  <dd className="flex items-baseline">
    <p className=" ">{item.stat}</p>
    <p
      className={classNames(
        item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
        'ml-2 flex items-baseline  '
      )}
    >
      {item.changeType === 'increase' ? (
        <ArrowUpIcon
          className="h-5 w-5 flex-shrink-0 self-center text-green-500"
          aria-hidden="true"
        />
      ) : (
        <ArrowDownIcon
          className="h-5 w-5 flex-shrink-0 self-center text-red-500"
          aria-hidden="true"
        />
      )}

      <span className="sr-only">
        {' '}
        {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by{' '}
      </span>
      {item.change}
    </p>
  </dd>
);

export default function Spotlight() {
  let { id: company_id } = useParams();

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
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
                                'text-sm font-medium  cursor-pointer rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                              )}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </nav>
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
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-1 lg:gap-8">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">
                    {/* Overview */}
                    <h1 className="font-bold text-2xl">Overview</h1>

                    <div className=" px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Target name
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {' '}
                            Integrated Analytical Laboratories
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Founded At
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900"> 2022</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Location
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            Paris,France
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Industry
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            Genome editing
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Ebdita (2021)
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <Stat
                              item={{
                                stat: '$711,897',
                                change: '19%',
                                changeType: 'increase',
                              }}
                            />
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Revenue (2021)
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <Stat
                              item={{
                                stat: '$1,200,000',
                                change: '10%',
                                changeType: 'increase',
                              }}
                            />
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Number of founding rounds
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">23</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Lat founding round
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            211M$ (Serie A)
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            Integrated Analytical Laboratories Integrated
                            Analytical Laboratories offers an array of
                            analytical services and solutions to the
                            pharmaceutical and environmental industries.
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="rounded-md shadow-md p-4">
                        {/* People */}

                        <div className="flex flex-row  justify-between ">
                          <h1 className="font-bold text-2xl">People</h1>
                          <nav className="flex space-x-4" aria-label="Tabs">
                            {[
                              { name: 'General', href: '#', current: true },

                              { name: 'Skills', href: '#', current: false },
                            ].map((tab) => (
                              <div
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                  tab.current
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'text-gray-500 hover:text-gray-700',
                                  'px-3 py-2 font-medium text-sm rounded-md cursor-pointer'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                              >
                                {tab.name}
                              </div>
                            ))}
                          </nav>
                        </div>
                        {/* employee count */}
                        <div className="m-2 mt-4 flex flex-row justify-between">
                          <div>
                            <p className="">Number of employees </p>
                            <p className="text-gray-300">
                              <span className="text-black font-semibold">
                                231
                              </span>{' '}
                              since 12/2021
                            </p>
                          </div>
                          <TrendChart skillName="test" />
                        </div>
                        {/* founders  */}
                        <div className="m-2 ">
                          <p className="">Founders </p>

                          <div className="grid grid-cols-2 gap-4 ">
                            {' '}
                            {[
                              { id: 1, name: 'john Lenaby', role: 'CEO' },
                              { id: 2, name: 'Bath Racoon', role: 'CTO' },
                            ].map((founder) => (
                              <div
                                key={founder.id}
                                className="focus:outline-none"
                              >
                                {/* Extend touch target to entire panel */}

                                <p className="text-sm font-medium text-gray-900">
                                  {founder.name}
                                </p>
                                <p className="truncate text-sm text-gray-500">
                                  {founder.role}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md shadow-md p-4">
                        {' '}
                        {/* Technology */}
                        <h1 className="font-bold text-2xl">Concepts</h1>
                        <div class="space-y-4 mt-4">
                          {[
                            {
                              concept_name: 'Genome editing',
                              count: 1121,
                              ratio: 1,
                            },
                            {
                              concept_name: 'RNA sequencing ',
                              count: 573,
                              ratio: 0.4,
                            },
                            {
                              concept_name: 'Machine learning',
                              count: 409,
                              ratio: 0.3,
                            },
                            {
                              concept_name: 'Graph databases',
                              count: 56,
                              ratio: 0.05,
                            },
                          ].map((concept) => (
                            <div class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none">
                              <div class="flex-1">
                                <div
                                  class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
                                  style={{
                                    width: `${parseInt(concept.ratio * 100)}%`,
                                  }}
                                ></div>{' '}
                                <p>{concept.concept_name}</p>
                              </div>{' '}
                              <p class="pl-2">{concept.ratio.toFixed(2)}</p>{' '}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-md shadow-md p-4">
                        {' '}
                        {/* Technology */}
                        <h1 className="font-bold text-2xl">Papers</h1>
                        <span className=" ">empty</span>
                      </div>
                      <div className="rounded-md shadow-md p-4">
                        {' '}
                        {/* Technology */}
                        <h1 className="font-bold text-2xl">Patents</h1>
                        <span className="  ">empty</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
