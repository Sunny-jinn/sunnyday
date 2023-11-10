import React from "react"

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

export const CategoryList: React.FC<CategoryListProps> = ({
  selectedCategory,
  categoryList,
}) => {
  return <div />
}
