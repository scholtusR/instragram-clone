import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

function Suggestions() {

    const [suggestion, setSuggestion] = useState([])

    useEffect(() => {
        const suggestion = [...Array(5)].map((_, i) => (
            {
                name: faker.internet.userName(),
                id: faker.datatype.uuid(),
                avatar: faker.image.avatar(),
                companyName: faker.company.companyName()
            }
        ))
        setSuggestion(suggestion)
    }, [])


    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>

            {
                suggestion.map(profile => (
                    <div key={profile.id} className="flex justify-between mt-3">
                        <img className='w-10 h-10 rounded-full border p-[2px]' src={profile.avatar} alt=""/>

                        <div className='flex-1 ml-4'>
                            <h2 className='font-semibold text-sm'>{profile.name}</h2>
                            <h3 className='text-xs text-gray-400'>Works at {profile.companyName}</h3>
                        </div>

                        <button className='text-blue-400 text-sm font-semibold '>Follow</button>
                    </div>
                ))
            }


        </div>
    )
}

export default Suggestions