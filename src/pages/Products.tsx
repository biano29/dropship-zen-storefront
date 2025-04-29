
import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react";
import { mockProducts, mockCategories } from "@/mock-data";
import { Product } from "@/types";

const sortOptions = [
  { label: "Relevância", value: "relevance" },
  { label: "Preço: Menor para Maior", value: "price_asc" },
  { label: "Preço: Maior para Menor", value: "price_desc" },
  { label: "Nome: A-Z", value: "name_asc" },
  { label: "Nome: Z-A", value: "name_desc" },
  { label: "Mais Recentes", value: "newest" },
];

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    price: true,
    ratings: true,
  });
  
  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    category: searchParams.get("categoria") || "",
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
    sort: searchParams.get("sort") || "relevance",
  });
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Apply filters whenever they change
  useEffect(() => {
    let result = [...mockProducts];
    
    // Filter by search query
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by category
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= filters.minPrice && product.price <= filters.maxPrice
    );
    
    // Filter by rating
    if (filters.rating > 0) {
      result = result.filter(product => product.rating >= filters.rating);
    }
    
    // Sort products
    switch (filters.sort) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name_asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
        // In a real app, you would sort by date
        break;
      default:
        // relevance - this would typically be handled by the backend
        break;
    }
    
    setFilteredProducts(result);
    
    // Update URL with filters
    const newSearchParams = new URLSearchParams();
    if (filters.search) newSearchParams.set("search", filters.search);
    if (filters.category) newSearchParams.set("categoria", filters.category);
    if (filters.sort !== "relevance") newSearchParams.set("sort", filters.sort);
    
    setSearchParams(newSearchParams);
  }, [filters, setSearchParams]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({ ...prev, minPrice: value[0], maxPrice: value[1] }));
  };
  
  const toggleFilter = (filter: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sort: e.target.value }));
  };
  
  const handleCategoryClick = (categoryId: string) => {
    setFilters(prev => ({ 
      ...prev, 
      category: prev.category === categoryId ? "" : categoryId 
    }));
  };
  
  const handleRatingClick = (rating: number) => {
    setFilters(prev => ({ 
      ...prev, 
      rating: prev.rating === rating ? 0 : rating 
    }));
  };
  
  const clearAllFilters = () => {
    setFilters({
      search: "",
      category: "",
      minPrice: 0,
      maxPrice: 1000,
      rating: 0,
      sort: "relevance",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Nossos Produtos</h1>
        <p className="text-shop-gray">
          Encontre os melhores produtos para você com os preços mais competitivos do mercado.
        </p>
      </div>
      
      {/* Search Bar (Mobile & Desktop) */}
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full pl-10"
          value={filters.search}
          onChange={handleSearchChange}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>

      {/* Mobile Filter Trigger */}
      <div className="md:hidden mb-4">
        <Button 
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          variant="outline"
          className="w-full flex justify-between items-center"
        >
          Filtros e Ordenação
          {isMobileFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div 
          className={`${
            isMobileFilterOpen ? "block" : "hidden"
          } md:block w-full md:w-64 flex-shrink-0`}
        >
          {/* Active Filters Summary */}
          {(filters.search || filters.category || filters.rating > 0 || 
            filters.minPrice > 0 || filters.maxPrice < 1000) && (
            <div className="mb-4 p-4 bg-shop-light-gray rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Filtros Ativos</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAllFilters}
                  className="text-shop-blue hover:text-shop-light-blue h-auto py-1"
                >
                  Limpar
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.search && (
                  <span className="bg-white text-sm px-3 py-1 rounded-full border">
                    "{filters.search}"
                  </span>
                )}
                {filters.category && (
                  <span className="bg-white text-sm px-3 py-1 rounded-full border">
                    {mockCategories.find(c => c.id === filters.category)?.name}
                  </span>
                )}
                {filters.rating > 0 && (
                  <span className="bg-white text-sm px-3 py-1 rounded-full border">
                    {filters.rating}+ ★
                  </span>
                )}
                {(filters.minPrice > 0 || filters.maxPrice < 1000) && (
                  <span className="bg-white text-sm px-3 py-1 rounded-full border">
                    R${filters.minPrice} - R${filters.maxPrice}
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Categories Filter */}
          <div className="mb-6 border border-gray-200 rounded-lg p-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilter("categories")}
            >
              <h3 className="font-medium">Categorias</h3>
              {expandedFilters.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedFilters.categories && (
              <div className="mt-3 space-y-2">
                {mockCategories.map(category => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox 
                      id={`category-${category.id}`}
                      checked={filters.category === category.id}
                      onCheckedChange={() => handleCategoryClick(category.id)}
                    />
                    <label 
                      htmlFor={`category-${category.id}`}
                      className="ml-2 text-sm cursor-pointer"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Price Range Filter */}
          <div className="mb-6 border border-gray-200 rounded-lg p-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilter("price")}
            >
              <h3 className="font-medium">Preço</h3>
              {expandedFilters.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedFilters.price && (
              <div className="mt-6 px-2">
                <Slider 
                  defaultValue={[filters.minPrice, filters.maxPrice]}
                  min={0}
                  max={1000}
                  step={10}
                  onValueChange={handlePriceChange}
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>R${filters.minPrice}</span>
                  <span>R${filters.maxPrice}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Ratings Filter */}
          <div className="mb-6 border border-gray-200 rounded-lg p-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilter("ratings")}
            >
              <h3 className="font-medium">Avaliações</h3>
              {expandedFilters.ratings ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedFilters.ratings && (
              <div className="mt-3 space-y-2">
                {[4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center">
                    <Checkbox 
                      id={`rating-${rating}`}
                      checked={filters.rating === rating}
                      onCheckedChange={() => handleRatingClick(rating)}
                    />
                    <label 
                      htmlFor={`rating-${rating}`}
                      className="ml-2 text-sm flex items-center cursor-pointer"
                    >
                      {rating}+ <span className="text-yellow-400 ml-1">★</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort & Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <p className="text-shop-gray mb-2 sm:mb-0">
              Exibindo {filteredProducts.length} produtos
            </p>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm">Ordenar por:</label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                value={filters.sort}
                onChange={handleSortChange}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">Nenhum produto encontrado</h3>
              <p className="text-shop-gray mb-6">
                Tente ajustar seus filtros ou usar termos de busca diferentes.
              </p>
              <Button onClick={clearAllFilters}>
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
