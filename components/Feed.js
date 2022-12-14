import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'
import { useSession } from "next-auth/react"

function Feed() {

    const { data: session } = useSession()

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className='col-span-2'>
                <Stories />
                <Posts />
            </section>

            {session && (
                <section>
                    <div className=" fixed hidden xl:inline-grid md:col-span-1">
                        <MiniProfile className="top-20" />
                        <Suggestions />
                    </div>
                </section>
            )}
        </main>
    )
}

export default Feed