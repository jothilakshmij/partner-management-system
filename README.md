# Partner Management System

A full-stack web application for managing business partners with a modern React frontend and Node.js/Express backend.

## 🚀 Features

- **Dashboard Overview**: Visual statistics and charts showing partner distribution
- **Partner Management**: Complete CRUD operations for partner data
- **Responsive Design**: Modern, mobile-friendly interface
- **Data Visualization**: Interactive pie charts and bar charts using Recharts
- **Real-time Updates**: Live data updates across the application
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Recharts** - Composable charting library
- **CSS3** - Styling and responsive design

## 📁 Project Structure

```
partner-management-system/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── Partner.js              # Partner data model
│   │   ├── routes/
│   │   │   └── partnerRoutes.js        # API routes
│   │   ├── controllers/
│   │   │   └── partnerController.js    # Business logic
│   │   ├── config/
│   │   │   └── db.js                   # Database connection
│   │   └── server.js                   # Express server setup
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js               # Navigation component
│   │   │   ├── PartnerForm.js          # Add/Edit partner form
│   │   │   ├── PartnerTable.js         # Partners list table
│   │   │   └── Dashboard.js            # Statistics dashboard
│   │   ├── pages/
│   │   │   ├── Home.js                 # Main dashboard page
│   │   │   ├── AddPartner.js           # Add partner page
│   │   │   └── EditPartner.js          # Edit partner page
│   │   ├── App.js                      # Main app component
│   │   ├── index.js                    # React entry point
│   │   └── index.css                   # Global styles
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd partner-management-system
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/partner-management
   PORT=5000
   NODE_ENV=development
   ```

### Running the Application

#### Backend Server

1. **Start MongoDB**
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

2. **Run the backend server**
   ```bash
   cd backend
   npm start
   # or for development with auto-restart
   npm run dev
   ```

   The backend will be available at `http://localhost:5000`

#### Frontend Application

1. **Run the React development server**
   ```bash
   cd frontend
   npm start
   ```

   The frontend will be available at `http://localhost:3000`

## 📊 API Endpoints

### Partners API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/partners` | Get all partners |
| GET | `/api/partners/:id` | Get single partner |
| POST | `/api/partners` | Create new partner |
| PUT | `/api/partners/:id` | Update partner |
| DELETE | `/api/partners/:id` | Delete partner |
| GET | `/api/partners/stats` | Get partner statistics |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health status |

## 📋 Partner Model

The Partner model includes the following fields:

- **name** (String, Required): Partner's full name
- **company** (String, Required): Company name
- **email** (String, Required, Unique): Email address
- **phone** (String, Required): Phone number
- **region** (String, Required): Geographic region
- **type** (Enum, Required): Partner type (Distributor/Vendor)
- **status** (Enum, Required): Partner status (Active/Inactive)
- **createdAt** (Date): Creation timestamp
- **updatedAt** (Date): Last update timestamp

## 🎨 Features Overview

### Dashboard
- **Statistics Cards**: Total, Active, Inactive partners count
- **Pie Chart**: Visual representation of partner status distribution
- **Bar Chart**: Partner type distribution (Distributors vs Vendors)

### Partner Management
- **Add Partner**: Form to create new partners with validation
- **Edit Partner**: Update existing partner information
- **Delete Partner**: Remove partners with confirmation
- **Partner List**: Table view with all partner details
- **Search & Filter**: Easy partner lookup and management

### User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading States**: Visual feedback during data operations
- **Error Handling**: User-friendly error messages
- **Success Notifications**: Confirmation of successful operations

## 🔧 Development

### Backend Development

```bash
cd backend
npm run dev  # Start with nodemon for auto-restart
```

### Frontend Development

```bash
cd frontend
npm start    # Start React development server
```

### Building for Production

```bash
# Build frontend
cd frontend
npm run build

# Start backend in production
cd backend
npm start
```

## 📸 Screenshots

<!-- Add screenshots here when available -->
*Screenshots will be added to showcase the application interface*

### Dashboard View
*Screenshot of the main dashboard with statistics and charts*

### Partner List
*Screenshot of the partners table with all partner information*

### Add/Edit Partner Form
*Screenshot of the partner form for adding or editing partners*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the connection string in `.env`
   - Verify MongoDB is accessible on the specified port

2. **Port Already in Use**
   - Change the PORT in `.env` file
   - Kill the process using the port: `npx kill-port 5000`

3. **CORS Issues**
   - Ensure the backend CORS is properly configured
   - Check that the frontend is making requests to the correct backend URL

4. **Dependencies Issues**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Happy Coding! 🚀**
