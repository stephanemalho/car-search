"use client"
import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

import { CarTranslations } from '@/types/translationTypes';
import { CarDetailsProps } from '@/types';

import translations from './translation.json'

import { generateCarImageUrl } from '@/utils';

const CarInfoList = ({ closeModal, car }: CarDetailsProps) => {

  const translatedKeys = Object.keys(car).map((key) => translations[key as keyof CarTranslations]);

  return (
    <div className="fixed inset-0 oferflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-auto transform rounded-2xl bg-white text-left shadow-xl p-6 transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full shadow-md"
                  >
                    <Image
                      src="/close.svg"
                      alt="close icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image src={generateCarImageUrl(car, "angle")} alt="car model" className="object-contain" fill priority />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                        <Image src={generateCarImageUrl(car, '29')} alt="car model" className="object-contain" fill priority />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                        <Image src={generateCarImageUrl(car, '22')} alt="car model" className="object-contain" fill priority />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                        <Image src={generateCarImageUrl(car, '13')} alt="car model" className="object-contain" fill priority />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value], index) => (
                        <div key={key} className="flex justify-between w-full gap-5 text-right">
                          <h4 className="text-gray capitalize">{translatedKeys[index]}</h4>
                          <p className="text-black-100 font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
  )
}

export default CarInfoList