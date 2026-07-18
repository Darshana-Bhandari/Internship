import React, { useState, useEffect } from 'react'
import {
  createProducts,
  deleteProduct,
  getProducts,
  updateProducts,
} from './services/productService'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
// import AppRoute from './routes/AppRoute'
// import { Outlet } from 'react-router-dom'

const App = () => {
  // Holds the list of products fetched from the backend/API
  const [products, setProducts] = useState([])

  // Holds the product currently being edited (null when not editing)
  const [editingProduct, setEditingProduct] = useState(null)

  // Optional: loading and error states so the UI can react to network status
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // ------------------------------------------------------------------
  // READ: fetch all products from the API and store them in state
  // ------------------------------------------------------------------
  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await getProducts()
      setProducts(response.data)
    } catch (err) {
      console.error('Failed to fetch products:', err)
      setError('Could not load products. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Run once when the component mounts
  useEffect(() => {
    fetchProducts()
  }, [])

  // ------------------------------------------------------------------
  // CREATE: add a new product, then refresh the list
  // ------------------------------------------------------------------
  const addProduct = async (product) => {
    try {
      await createProducts(product)
      await fetchProducts()
    } catch (err) {
      console.error('Failed to add product:', err)
      setError('Could not add product.')
    }
  }

  // ------------------------------------------------------------------
  // UPDATE: edit an existing product by id, then refresh the list
  // NOTE: previously the first argument was mistakenly named
  // "IdleDeadline" and "id" was used inside without being defined.
  // Fixed here: the function now correctly accepts (id, product).
  // ------------------------------------------------------------------
  const updateExisting = async (id, product) => {
    try {
      await updateProducts(id, product)
      setEditingProduct(null) // exit edit mode
      await fetchProducts()
    } catch (err) {
      console.error('Failed to update product:', err)
      setError('Could not update product.')
    }
  }

  // ------------------------------------------------------------------
  // DELETE: remove a product by id, then refresh the list
  // ------------------------------------------------------------------
  const removeProduct = async (id) => {
    try {
      await deleteProduct(id)
      await fetchProducts()
    } catch (err) {
      console.error('Failed to delete product:', err)
      setError('Could not delete product.')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product CRUD Operations Using Axios</h1>

      {/* Show any error message to the user */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show a simple loading indicator while fetching */}
      {loading && <p>Loading products...</p>}

      {/* Form used for both creating a new product and editing an existing one.
          When editingProduct is set, the form should pre-fill its fields
          and call updateProducts (updateExisting) instead of addProduct. */}
      <ProductForm
        addProduct={addProduct}
        editingProduct={editingProduct}
        updateProducts={updateExisting}
      />

      {/* List of products with edit/delete actions */}
      <ProductList
        products={products}
        onDelete={removeProduct}
        onEdit={setEditingProduct}
      />

      {/* <AppRoute /> */}
    </div>
  )
}

export default App