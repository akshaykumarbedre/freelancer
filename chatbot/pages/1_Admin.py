import streamlit as st
from streamlit_option_menu import option_menu
import sys
from pathlib import Path

# Add the src directory to the path so we can import our modules
sys.path.append(str(Path(__file__).parent.parent.parent))

from src.services.main_service import MainService

# Initialize services
@st.cache_resource
def get_main_service():
    return MainService()

# Set page configuration
st.set_page_config(
    page_title="Admin Panel",
    page_icon="⚙️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Main navigation
selected = option_menu(
    menu_title="Admin Panel",
    options=["URL Processing", "Product Management", "Description Management"],
    icons=["globe", "box-seam", "file-text"],
    menu_icon="gear",
    default_index=0,
    orientation="horizontal",
)

# Initialize main service
main_service = get_main_service()

# URL Processing Page
if selected == "URL Processing":
    st.header("URL Processing")
    st.write("""
    Process URLs to extract descriptions and product information.
    Enter a website URL below to extract and classify its navigation URLs.
    """)
    
    url = None
    classified_urls = None
    
    with st.form("url_form"):
        url = st.text_input("Enter Website URL", placeholder="https://example.com")
        submitted = st.form_submit_button("Process URL")
    
    if submitted and url:
        with st.spinner("Processing URL..."):
            try:
                classified_urls = main_service.extract_and_classify_urls(url)
                st.success(f"Successfully processed URL: {url}")
                
                # Display classified URLs
                st.subheader("Description URLs")
                if classified_urls['desc_urls']:
                    for desc_url in classified_urls['desc_urls']:
                        st.write(f"- {desc_url}")
                else:
                    st.info("No description URLs found.")
                
                st.subheader("Product/Service URLs")
                if classified_urls['product_service_urls']:
                    for prod_url in classified_urls['product_service_urls']:
                        st.write(f"- {prod_url}")
                else:
                    st.info("No product/service URLs found.")
            except Exception as e:
                st.error(f"Error processing URL: {str(e)}")
    
    # Process buttons outside the form
    if classified_urls:
        col1, col2 = st.columns(2)
        with col1:
            if classified_urls['desc_urls'] and st.button("Process Description URLs"):
                with st.spinner("Processing description URLs..."):
                    main_service.process_description_urls(classified_urls['desc_urls'])
                    st.success("Description URLs processed successfully!")
        
        with col2:
            if classified_urls['product_service_urls'] and st.button("Process Product URLs"):
                with st.spinner("Processing product URLs..."):
                    products = main_service.process_product_urls(classified_urls['product_service_urls'])
                    st.success(f"Processed {len(products)} products successfully!")
                    if products:
                        st.subheader("Extracted Products")
                        for i, product in enumerate(products):
                            with st.expander(f"Product {i+1}: {product.get('name', 'Unnamed Product')}"):
                                st.json(product)

# Product Management Page
elif selected == "Product Management":
    st.header("Product Management")
    st.write("Manage product information in the vector database.")
    
    tab1, tab2 = st.tabs(["View Products", "Add Product"])
    
    with tab1:
        st.subheader("All Products")
        if st.button("Refresh Products"):
            pass
        
        with st.spinner("Loading products..."):
            products = main_service.get_all_products()
            
            if not products:
                st.info("No products found in the database.")
            else:
                st.success(f"Found {len(products)} products")
                for i, product in enumerate(products):
                    with st.expander(f"Product {i+1}: {product.get('name', 'Unnamed Product')}"):
                        st.json(product)
                        if st.button(f"Delete Product", key=f"delete_{i}"):
                            try:
                                removed = main_service.remove_product(
                                    product_id=product.get("product_id"),
                                    product_name=product.get("name")
                                )
                                if removed:
                                    st.success(f"Product removed successfully!")
                                    st.rerun()
                                else:
                                    st.error("Product could not be removed.")
                            except Exception as e:
                                st.error(f"Error removing product: {str(e)}")
    
    with tab2:
        st.subheader("Add New Product")
        with st.form("add_product_form"):
            name = st.text_input("Product Name")
            description = st.text_area("Product Description")
            price = st.number_input("Product Price", min_value=0.0, format="%.2f")
            specifications = st.text_area("Product Specifications")
            features = st.text_area("Product Features")
            
            submitted = st.form_submit_button("Add Product")
            
            if submitted:
                if not name:
                    st.error("Product name is required")
                else:
                    try:
                        product_data = {
                            "name": name,
                            "description": description,
                            "price": price,
                            "specifications": specifications,
                            "features": features
                        }
                        result = main_service.add_product(product_data)
                        st.success(f"Product '{name}' added successfully!")
                    except Exception as e:
                        st.error(f"Error adding product: {str(e)}")

# Description Management Page
else:  # selected == "Description Management"
    st.header("Description Management")
    st.write("Manage description documents in the vector database.")
    
    tab1, tab2 = st.tabs(["View Descriptions", "Add Description"])
    
    with tab1:
        st.subheader("All Descriptions")
        if st.button("Refresh Descriptions"):
            pass
        
        with st.spinner("Loading descriptions..."):
            descriptions = main_service.get_all_descriptions()
            
            if not descriptions:
                st.info("No descriptions found in the database.")
            else:
                st.success(f"Found {len(descriptions)} descriptions")
                for i, desc in enumerate(descriptions):
                    try:
                        title = desc['metadata'].get('title', 'Untitled')
                        doc_id = desc['doc_id']
                        
                        with st.expander(f"Description {i+1}: {title}"):
                            st.text_area("Content", value=desc['content'], height=150, disabled=True)
                            st.write("Metadata:")
                            st.json(desc['metadata'])
                            
                            if st.button(f"Delete Description", key=f"delete_desc_{i}"):
                                try:
                                    removed = main_service.remove_description(doc_id)
                                    if removed:
                                        st.success(f"Description '{title}' removed successfully!")
                                        st.rerun()
                                    else:
                                        st.error("Description could not be removed.")
                                except Exception as e:
                                    st.error(f"Error removing description: {str(e)}")
                    except Exception as e:
                        st.error(f"Error displaying description {i+1}: {str(e)}")
    
    with tab2:
        st.subheader("Add New Description")
        with st.form("add_description_form"):
            title = st.text_input("Title", value="Untitled")
            text = st.text_area("Description Text", height=200)
            source = st.text_input("Source", value="direct_input")
            
            submitted = st.form_submit_button("Add Description")
            
            if submitted:
                if not text or len(text.strip()) < 50:
                    st.error("Description text must be at least 50 characters")
                else:
                    try:
                        result = main_service.add_description(text, title, source)
                        st.success(f"Description '{title}' added successfully!")
                    except Exception as e:
                        st.error(f"Error adding description: {str(e)}")