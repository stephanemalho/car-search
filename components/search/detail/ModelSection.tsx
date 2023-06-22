import Image from 'next/image'
import {SearchButton } from '@/components'
import { SearchModelProps } from '@/types'

const ModelSection = ({ model , setModel  }: SearchModelProps) => {

  return (
    <div className='searchbar__item'>
      <Image
        src="/model-icon.png"
        alt="model icon"
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
      />
      <input type="text" name="model" value={model} onChange={(e) => { setModel(e.target.value) }} placeholder="corolla" className="searchbar__input" />
      <SearchButton additionalClasses="sm:hidden " handleClick={() => { }} />
    </div>
  )

}

export default ModelSection;