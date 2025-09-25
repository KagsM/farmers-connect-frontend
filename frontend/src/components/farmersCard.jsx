import React from "react";
import '../styles/components.css';
import img from '../assets/logo.svg';

function FarmersCard({ product, onDelete, onEdit, inCart, onAddToCart, onRemoveFromCart }) {
    const {
        product_name,
        description,
        price,
        quantity,
        location,
        image_url,
        contact_info,
        unit,
    } = product;

    return (
        <div className="product-card">
            <img src={image_url || img} alt={product_name} />
            <h3>{product_name}</h3>

            <div className="price-quantity">
                <p className="price">Ksh {Number(price).toFixed(2)} <span className="unit">/{unit}</span></p>
                <p className="unit">Quantity: {quantity}</p>
            </div>

            <p>{description}</p>
            <div className="product-details">
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Posted by:</strong> {contact_info}</p>
                {product.verified && <span className="verified-badge">✔ Verified Farmer</span>}
            </div>

            <div className="product-card-actions">
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete} className="delete-button">Delete</button>
            </div>
        </div>
    );
}

export default FarmersCard;
