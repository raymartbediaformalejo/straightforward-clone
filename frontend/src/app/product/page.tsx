"use client"

import { useMemo } from 'react'

import { useGetProduts } from '@/services/queries'
import { TProduct } from '@/types/type'

const Products = () => {
  const {data} = useGetProduts()
  const products: TProduct[] = useMemo(() => data?.data || [], [data])

  console.log(products)
  return (
    <div>Products</div>
  )
}

export default Products