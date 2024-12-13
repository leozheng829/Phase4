import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className='container'>
        <h1 style={{textAlign: 'center'}}>Phase IV: Business Supply System</h1>
        <h2 style={{textAlign: 'center'}}>Created By: Leo Zheng, Andy Vo, Kelly Zhang, and Andrew Jiang</h2>

        <div className='category'>
            <h2>Views</h2>
            <div className='category-buttons'>
                <Link to="/owners-view" className='button'>[22] Owner View</Link>
                <Link to="/employees-view" className='button'>[23] Employee View</Link>
                <Link to="/drivers-view" className='button'>[24] Driver View</Link>
                <Link to="/locations-view" className='button'>[25] Location View</Link>
                <Link to="products-view" className='button'>[26] Product View</Link>
                <Link to="services-view" className='button'>[27] Service View</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Owners</h2>
            <div className='category-buttons'>
                <Link to="/add-owner" className='button'>[1] Add Owner</Link>
                <Link to="/start-funding" className='button'>[10] Start Funding</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Employees</h2>
            <div className='category-buttons'>
                <Link to="/add-employee" className='button'>[2] Add Employee</Link>
                <Link to="/hire-employee" className='button'>[11] Hire Employee</Link>
                <Link to="/fire-employee" className='button'>[12] Fire Employee</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Drivers</h2>
            <div className='category-buttons'>
                <Link to="/add-driver-role" className='button'>[3] Add Drive Role</Link>
                <Link to="/remove-driver-role" className='button'>[21] Remove Driver Role</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Workers</h2>
            <div className='category-buttons'>
                <Link to="/add-worker-role" className='button'>[4] Add Worker Role</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Products</h2>
            <div className='category-buttons'>
                <Link to="/add-product" className='button'>[5] Add Product</Link>
                <Link to="/purchase-product" className='button'>[18] Purchase Product</Link>
                <Link to="/remove-product" className='button'>[19] Remove Product</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Vans</h2>
            <div className='category-buttons'>
                <Link to="/add-van" className='button'>[6] Add Van</Link>
                <Link to="/takeover-van" className='button'>[14] Takeover Van</Link>
                <Link to="/load-van" className='button'>[15] Load Van</Link>
                <Link to="/refuel-van" className='button'>[16] Refuel Van</Link>
                <Link to="/drive-van" className='button'>[17] Drive Van</Link>
                <Link to="/remove-van" className='button'>[20] Remove Van</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Businesses</h2>
            <div className='category-buttons'>
                <Link to="/add-business" className='button'>[7] Add Business</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Delivery Services</h2>
            <div className='category-buttons'>
                <Link to="/add-service" className='button'>[8] Add Service</Link>
                <Link to="/manage-service" className='button'>[13] Manage Service</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Locations</h2>
            <div className='category-buttons'>
                <Link to="/add-location" className='button'>[9] Add Location</Link>
            </div>
        </div>
        
    </div>
);

export default Home;