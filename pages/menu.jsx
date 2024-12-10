import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TopMenus() {
  const [Menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const userId= localStorage.getItem('userId');
        if (userId) {
        const response = await axios.get('http://localhost:3000/api/user/menus',{
          headers: {
            'Authorization': `Bearer ${userId}`
        }
    });
        setMenus(response.data);
  }else {
                navigate('/login');
            }
      } catch (error) {
        console.error('Error fetching Menus:', error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <div className="container">
      <section className="my-4">
        <h3 className="text-center mb-4">Our Top Furniture Menus</h3>
        <div className="row justify-content-around">
          {Menus.map(menu => (
            <div key={menu.id} className="col-md-4 mb-4">
              <div className="card" style={{ height: '100%' }}>
                <Link to={`/products/${menu._id}`}> 
                  <img src={menu.image} className="card-img-top img-fluid" style={{ height: '250px', objectFit: 'cover' }} alt={menu.slug} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title text-center">{menu.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TopMenus;
