// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Maybe define an alias
  // as: 'title'
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Maybe define an alias
  // as: 'title'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};