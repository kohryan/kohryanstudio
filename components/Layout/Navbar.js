/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
  } from '@heroicons/react/outline'

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Experience', href: '#', current: false },
    { name: 'Work', href: '#', current: false },
    { name: 'Project', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="min-h-full">
        <Popover as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="mt-8 flex items-center">
                    <div className="flex-shrink-0">
                      <Link href='/'>
                        <a className='hover:mix-blend-overlay'>
                          <img
                            className="h-12 w-12"
                            src="/icons/logo.svg"
                            alt="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'font-mono text-gray-800 hover:text-indigo-600 hover:font-medium'
                                : 'font-mono text-gray-800 hover:text-indigo-600 hover:font-medium',
                              'px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="mt-8 ml-4 flex items-center md:ml-6">
                        <div>
                            <a
                            href="https://sultradata.com"
                            className="w-full font-mono flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-md shadow-sm text-base font-normal text-indigo-600 hover:bg-indigo-50/50"
                            >
                            Resume
                            </a>
                        </div>

                      
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="mt-8 inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:border-2 hover:border-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-indigo-600">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>

            <Transition
                   as={Fragment}
                   enter="duration-200 ease-out"
                   enterFrom="opacity-0 scale-95"
                   enterTo="opacity-100 scale-100"
                   leave="duration-100 ease-in"
                   leaveFrom="opacity-100 scale-100"
                   leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel className="absolute z-10 ml-6 mt-6 transform w-screen max-w-lg lg:-translate-x-1/2 md:hidden bg-white border border-indigo-600 rounded-md shadow-sm">
                <div className="mt-4 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Popover.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-gray-800 hover:text-indigo-600': 'text-gray-800 hover:text-indigo-600',
                        'font-mono block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Popover.Button>
                  ))}
                </div>
                <div className="pt-3 pb-3 bg-gray-50">
                  <div className="flex px-4">
                        <a
                            href="https://sultradata.com"
                            className=" font-mono flex px-4 py-2 border border-indigo-600 rounded-md shadow-sm text-base font-normal text-indigo-600 hover:bg-indigo-50/50"
                            >
                            Resume
                        </a>

                  </div>
                </div>
              </Popover.Panel>
            </Transition>
            </>
          )}
        </Popover>
    </div>
  )
}