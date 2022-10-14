import React from 'react';
import { CategoryCard, Navbar } from '../../Component'
import './Category.css'
import { quizQuestion } from '../../data/quizQuestion'

const Category = () => {
  return (
    <main className="category_page">
      <Navbar />
      <h2 className="category_heading page-heading">
        Select one to start playing and, show you talent!!
      </h2>
      <section className="category_section">
        {quizQuestion.map(({ categoryId, categoryName, categoryImg }) => {
          return (
            <CategoryCard
              key={categoryId}
              categoryId={categoryId}
              categoryImg={categoryImg}
              categoryName={categoryName}
            />
          )
        })}
      </section>
    </main>
  )
}

export { Category }
