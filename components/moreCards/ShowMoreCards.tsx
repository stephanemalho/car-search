"use client"

import { ShowMoreCardsProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "../reusableUI/CustomButton"
import { updateSearchParams } from "@/utils"

const ShowMoreCards = ({ pageNumber , isNext} : ShowMoreCardsProps ) => {
  const router = useRouter()

  const handleShowMore = () => {
    const nextLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams('limit', nextLimit.toString());

    router.push(newPathName)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">  
      {!isNext && (
        <CustomButton
          title="Plus de voitures"
          handleClick={handleShowMore}
          containerStyles="bg-primary-blue rounded-full text-white"
          btnType="button"
        />
      )}
    </div>
  )
}

export default ShowMoreCards