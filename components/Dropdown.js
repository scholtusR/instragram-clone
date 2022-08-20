import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon } from '@heroicons/react/outline'
import { useRecoilState } from "recoil"
import { modalState } from '../atoms/modalAtom'
import swal from 'sweetalert'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    const [open, setOpen] = useRecoilState(modalState)

    const alert = () => {
        swal('Funcionalidad en desarrollo. Prueba con añadir una foto (luego de loguearte), comentar alguna publicación y dar likes!')
    }

    return (
        <Menu as="div" className="relative inline-block text-left md:hidden cursor-pointer" >
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50 ">
                    <MenuIcon className=" h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="flex grid items-center justify-center">
                        <Menu.Item onClick={alert} className="flex px-5 py-2 hover:bg-gray-50">
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <PaperAirplaneIcon className='h-5 rotate-45' /> Messages
                                    <div className='absoulte -ml-3 -mt-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item onClick={() => setOpen(true)} className="flex px-5 py-2 hover:bg-gray-50">
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <PlusCircleIcon className='h-5' /> Add Post
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item onClick={alert} className="flex px-5 py-2 hover:bg-gray-50">
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <UserGroupIcon className='h-5' />Community
                                </a>
                            )}
                        </Menu.Item>

                        <Menu.Item onClick={alert} className="flex px-5 py-2 hover:bg-gray-50">
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <HeartIcon className='h-5' />Likes
                                </a>
                            )}
                        </Menu.Item>

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}