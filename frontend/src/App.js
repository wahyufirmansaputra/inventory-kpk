import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

import ListUser from './pages/user/ListUser'
import CreateUser from './pages/user/CreateUser'
import EditUser from './pages/user/EditUser'

import ListCustomer from './pages/customer/ListCustomer'
import CreateCustomer from './pages/customer/CreateCustomer'
import EditCustomer from './pages/customer/EditCustomer'

import ListSupplier from './pages/supplier/ListSupplier'
import CreateSupplier from './pages/supplier/CreateSupplier'
import EditSupplier from './pages/supplier/EditSupplier'

import ListPenawaran from './pages/penawaran/ListPenawaran';
import CreatePenawaran from './pages/penawaran/CreatePenawaran';
import EditPenawaran from './pages/penawaran/EditPenawaran';

import ListBarang from './pages/barang/ListBarang'
import CreateBarang from './pages/barang/CreateBarang'
import EditBarang from './pages/barang/EditBarang'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
            
            {/* Data User */}
            <Route path='/user' element={<ListUser />}></Route>
            <Route path='/createUser' element={<CreateUser />}></Route>
            <Route path='/editUser/:id' element={<EditUser />}></Route>

            {/* Data Customer */}
            <Route path='/customer' element={<ListCustomer />}></Route>
            <Route path='/createCustomer' element={<CreateCustomer />}></Route>
            <Route path='/editCustomer/:id' element={<EditCustomer />}></Route>

            {/* Data Supplier */}
            <Route path='/supplier' element={<ListSupplier />}></Route>
            <Route path='/createSupplier' element={<CreateSupplier />}></Route>
            <Route path='/editSupplier/:id' element={<EditSupplier />}></Route>

            {/* Data Penawaran */}
            <Route path='/penawaran' element={<ListPenawaran />}></Route>
            <Route path='/createPenawaran' element={<CreatePenawaran />}></Route>
            <Route path='/editPenawaran/:id' element={<EditPenawaran />}></Route>


            {/* Data Barang */}
            <Route path='/barang' element={<ListBarang />}></Route>
            <Route path='/createBarang' element={<CreateBarang />}></Route>
            <Route path='/editBarang/:id' element={<EditBarang />}></Route>

            
        </Routes>
    </BrowserRouter>
  )
}

export default App
