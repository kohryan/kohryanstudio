/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
  } from '@heroicons/react/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="min-h-full">
        <Disclosure as="nav">
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
                    <Disclosure.Button className="mt-8 inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:border-2 hover:border-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden bg-white">
                <div className="mt-4 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
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
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-3 pb-3 bg-gray-50">
                  <div className="flex px-5">
                        <a
                            href="https://sultradata.com"
                            className=" font-mono flex px-4 py-2 border border-indigo-600 rounded-md shadow-sm text-base font-normal text-indigo-600 hover:bg-indigo-50/50"
                            >
                            Resume
                        </a>

                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </div>
  )
}