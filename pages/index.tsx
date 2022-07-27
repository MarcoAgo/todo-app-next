import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Category, CategoryEntity, GetCategoriesDocument, useGetCategoriesQuery } from '../graphql/generated/graphql-generated'
import { graphqlRequestClient } from '../graphql/utils/graphql-client'
import { categoriesAtom } from '../store/atoms/categories/categories-atom'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { isLoading, isError, data, error } = useGetCategoriesQuery(graphqlRequestClient)
  const [categories, setCategories] = useRecoilState(categoriesAtom)

  useEffect(() => {
    setCategories(data as CategoryEntity[])
  }, [JSON.stringify(data)])

  if (isLoading) return <div>isLoading</div>
  if (isError) return <div>Error</div>

  const renderCategory = (category: CategoryEntity, index: number) => {
    return (
      <div key={category.id}>
        <h2>{category.attributes?.title}</h2>
        <p>{category.attributes?.description}</p>
      </div>
    )
  }

  return (
    <div>
      {categories.map(renderCategory)}
    </div>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  // do request to get data
  const { categories } = await graphqlRequestClient.request(GetCategoriesDocument)

  // cache data into query client and serve dehydratated state
  queryClient.setQueryData(['getCategories'], categories.data)

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default Home
