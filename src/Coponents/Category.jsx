import React from 'react';
import WomanCategory from '.../mages/Woman.png'
const categoryData = [
  {
    id: 1,
    title: 'Kids',
    bgColor: 'bg-blue-200',
    image: 'public/imges/man.png',
  },
  {
    id: 2,
    title: 'Women',
    bgColor: 'bg-yellow-200',
    image: WomanCategory,
  },
  {
    id: 3,
    title: 'Men',
    bgColor: 'bg-red-200',
    image: 'public/imges/kids.png',
  },
];

function Category() {
  return (
    <div className="bg-white pb-6 pt-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 flex-col md:flex-row">
          {categoryData.map((category) => (
            <div
              key={category.id}
              className={`w-96 h-72 flex items-center border ${category.bgColor} px-6 rounded text-center relative`}
            >
              <h1 className="w-36">
                <b>{category.title}</b>
                <div className="">View All</div>
              </h1>
              <div className="">
                <img src={category.image} alt={category.title} className="w-80 h-72" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
