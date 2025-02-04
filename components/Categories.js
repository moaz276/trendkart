const Categories = () => {
    const categories = ["أجهزة", "ملابس", "أحذية", "إلكترونيات", "ألعاب"];
  
    return (
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            {category}
          </div>
        ))}
      </div>
    );
  };
  
  export default Categories;