import streamlit as st
from streamlit_option_menu import option_menu
import sys
from pathlib import Path

# Add the src directory to the path so we can import our modules
sys.path.append(str(Path(__file__).parent.parent))

from src.services.main_service import MainService

# Initialize services
@st.cache_resource
def get_main_service():
    return MainService()

# Set page configuration
st.set_page_config(
    page_title="AI Support Assistant",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Initialize session state variables if they don't exist
if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

# Main service initialization
main_service = get_main_service()

# Custom CSS to match the blue theme and styling
st.markdown("""
<style>
    /* Main container styling */
    .main .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    
    /* Header styling */
    .header-container {
        background-color: #2962FF;
        padding: 1.5rem;
        border-radius: 10px;
        color: white;
        margin-bottom: 1rem;
    }
    
    /* Button styling */
    .feature-button {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 5px 15px;
        margin-right: 10px;
        font-size: 14px;
        display: inline-block;
    }
    
    /* Chat container styling */
    .chat-container {
        background-color: #F8F9FA;
        border-radius: 10px;
        padding: 1rem;
        margin-top: 1rem;
    }
    
    /* Message bubbles styling */
    .stChatMessage {
        padding: 0.5rem;
    }
    
    /* User icon */
    .user-icon {
        background-color: #E9ECEF;
        border-radius: 50%;
        padding: 5px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    /* Assistant icon */
    .assistant-icon {
        background-color: #2962FF;
        border-radius: 50%;
        padding: 5px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    
    /* Input box styling */
    .stChatInputContainer {
        border-top: 1px solid #DEE2E6;
        padding-top: 1rem;
    }
    
    /* Hide Streamlit branding */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
</style>
""", unsafe_allow_html=True)

# Header section that mimics the blue header in the image
st.markdown("""
<div class="header-container">
    <h2>AI Support Assistant</h2>
    <p>Get instant answers about products, services, and more</p>
    <div>
        <span class="feature-button">24/7 Support</span>
        <span class="feature-button">Instant Responses</span>
        <span class="feature-button">Product Information</span>
    </div>
</div>
""", unsafe_allow_html=True)

# Chat interface container
st.markdown('<div class="chat-container">', unsafe_allow_html=True)

# Display chat history
for message in st.session_state.chat_history:
    icon_html = """
    <div class="user-icon">👤</div>
    """ if message["role"] == "user" else """
    <div class="assistant-icon">🤖</div>
    """
    
    with st.chat_message(message["role"], avatar="👤" if message["role"] == "user" else "🤖"):
        st.write(message["content"])

# Add initial greeting message if chat is empty
if not st.session_state.chat_history:
    with st.chat_message("assistant", avatar="🤖"):
        st.write("Hi there! How can I assist you today?")

# Chat input
if prompt := st.chat_input("Type your message here..."):
    # Add user message to chat history
    st.session_state.chat_history.append({"role": "user", "content": prompt})
    
    # Display user message
    with st.chat_message("user", avatar="👤"):
        st.write(prompt)
    
    # Get bot response
    with st.chat_message("assistant", avatar="🤖"):
        with st.spinner("Thinking..."):
            try:
                response = main_service.get_chatbot_response(prompt)
                st.write(response)
                st.session_state.chat_history.append({"role": "assistant", "content": response})
            except Exception as e:
                error_msg = f"Error: {str(e)}"
                st.error(error_msg)
                st.session_state.chat_history.append({"role": "assistant", "content": error_msg})

st.markdown('</div>', unsafe_allow_html=True)

# # Footer section
# st.markdown("""
# <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; font-size: 0.8rem; color: #6C757D;">
#     <span>Powered by WebAI • Your intelligent assistant</span>
#     <div>
#         <a href="#" style="color: #6C757D; text-decoration: none; margin-right: 1rem;">Help</a>
#         <a href="#" style="color: #6C757D; text-decoration: none; margin-right: 1rem;">Privacy</a>
#         <a href="#" style="color: #6C757D; text-decoration: none;">Feedback</a>
#     </div>
# </div>
# """, unsafe_allow_html=True)

# Clear chat button - placed in a less prominent position to match the design
col1, col2 = st.columns([6, 1])
with col2:
    if st.session_state.chat_history and st.button("Clear Chat"):
        st.session_state.chat_history = []
        st.rerun()