import {categories} from "../data/data.js"  

export default function Category() {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top rated Menu Items</h1>
         {/* Categories */}
         <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6  '>
            {
                categories.map((categorie, index) => {  
                    return (
                        <div className='bg-gray-100 rounded-lg flex justify-between items-center  gap-2 p-4' key={index}>
                            <h2 className='font-bold sm:text-xl' >{categorie.name}</h2>
                            <img className='w-20' src={categorie.image} alt={categorie.name} />
                        </div>
                    )
                })
            }
         </div>
    </div>
  )
}
