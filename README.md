 Partner Management System

A full-stack web application for managing business partners with a modern React frontend and Node.js/Express backend.

 🚀 Features

- Dashboard Overview: Visual statistics and charts showing partner distribution
- Partner Management: Complete CRUD operations for partner data
- Responsive Design: Modern, mobile-friendly interface
- Data Visualization: Interactive pie charts and bar charts using Recharts
- Real-time Updates: Live data updates across the application
- Form Validation: Client and server-side validation
- Error Handling: Comprehensive error handling and user feedback

🛠️ Tech Stack

 Backend
- Node.js - JavaScript runtime
- Express.js - Web framework
- MongoDB - NoSQL database
- Mongoose - MongoDB object modeling
- CORS- Cross-origin resource sharing
- dotenv - Environment variable management

 Frontend
- React 18 - JavaScript library for building user interfaces
- React Router - Client-side routing
- Axios - HTTP client for API requests
- Recharts - Composable charting library
- CSS3 - Styling and responsive design

 🚀 Getting Started

 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm 

 Installation

1.Clone the repository
   ```bash
   git clone <repository-url>
   cd partner-management-system
   ```

2. Install Backend Dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install Frontend Dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up Environment Variables
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/partner-management
   PORT=5000
   NODE_ENV=development
   ```

 Running the Application

Backend Server

1. Start MongoDB
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

2. Run the backend server
   ```bash
   cd backend
   npm start
   # or for development with auto-restart
   npm run dev
   ```

   The backend will be available at `http://localhost:5000`

Frontend Application

1. Run the React development server
   ```bash
   cd frontend
   npm start
   ```

   The frontend will be available at `http://localhost:3000`


Dashboard
- Statistics Cards**: Total, Active, Inactive partners count
-CRUD: admin has crud oeration

Partner Management
- Add Partner: Form to create new partners with validation
- Edit Partner: Update existing partner information
- Delete Partner: Remove partners with confirmation
- Partner List: Table view with all partner details
- Search & Filter: Easy partner lookup and management

User Experience
-Responsive Design: Works on desktop, tablet, and mobile
-Loading States: Visual feedback during data operations
-Error Handling: User-friendly error messages
-Success Notifications: Confirmation of successful operations

 🔧 Development

 Backend Development

```bash
cd backend
npm run dev  # Start with nodemon for auto-restart
```

 Frontend Development

```bash
cd frontend
npm start    # Start React development server
```

 Building for Production

```bash
# Build frontend
cd frontend
npm run build

# Start backend in production
cd backend
npm start
```

 📸 Screenshots

Screenshots will be added to showcase the application interface
 sign up 
 <img width="1670" height="802" alt="image" src="https://github.com/user-attachments/assets/2bce14e2-5579-42c5-beaf-9e9de8a54a65" />

 Dashboard View
<img width="1880" height="860" alt="image" src="https://github.com/user-attachments/assets/5bfdf3e4-8b7e-486c-811e-47ba9e8bec0c" />

Partner List
Screenshot of the partners table with all partner information
<img width="1878" height="852" alt="image" src="https://github.com/user-attachments/assets/292759de-0767-4afd-9b6d-3f0a2976d881" />

 Add/Edit Partner Form
<img width="1907" height="568" alt="image" src="https://github.com/user-attachments/assets/0f0c8590-e025-4377-b206-3578fd4f7846" />

 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

 🐛 Troubleshooting

 Common Issues
1. MongoDB Connection Error
2.Port Already in Use
3. CORS Issues
4. Dependencies Issues



