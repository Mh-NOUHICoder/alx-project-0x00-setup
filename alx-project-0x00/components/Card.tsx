import Image from "next/image"
import HOUSE_IMAGE from "@/public/assets/images/house.png"
import STAR_IMAGE from "@/public/assets/images/appart.png"
import React from "react"
import Pill from "./Pill"

const Card: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg w-[380px]">
      {/* Image */}
      <Image
        className="w-full h-[240px] object-cover"
        src={HOUSE_IMAGE}
        width={378}
        height={240}
        alt="house image"
      />

      {/* Tags */}
      <div className="p-3 flex gap-2 flex-wrap">
        <Pill title="Top Villa" />
        <Pill title="Self Check-In" />
        <Pill title="Free Reschedule" />
      </div>

      {/* Title + rating */}
      <div className="px-4 pb-2 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-xl text-gray-800">Villa Arrecife Beach House</h3>
          <p className="text-sm text-gray-500">Sideman, Bali, Indonesia</p>
        </div>
        <div className="flex items-center text-gray-700">
          <Image src={STAR_IMAGE} alt="star" width={20} height={20} />
          <p className="ml-2 font-medium text-sm">4.76</p>
        </div>
      </div>

      {/* Amenities + price */}
      <div className="px-4 pb-4 flex items-center justify-between">
        {/* Icons group */}
        <div className="grid grid-cols-3 border rounded-full px-3 py-1 text-gray-700 text-xs font-medium gap-2">
          <span className="flex items-center gap-1">🛏 4</span>
          <span className="flex items-center gap-1">🛋 2</span>
          <span className="flex items-center gap-1">👥 2–4</span>
        </div>
        {/* Price */}
        <p className="text-xl font-bold text-gray-800">
          $2,450 <span className="text-sm text-gray-500">/night</span>
        </p>
      </div>
    </div>
  )
}

export default Card
