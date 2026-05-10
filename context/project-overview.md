# RANDOM EVENT GENERATOR

## OVERVIEW
A simple and engaging web application designed to help users discover exciting events and allow organizers to share their own. The platform serves two primary audiences:
- **Visitors**: Can instantly generate a random event from the database to find something new to do.
- **Registered Users**: Can create, save, and promote their own events to reach a wider audience.

## GOALS
- Provide a seamless and fun way to discover unique events.
- Empower event organizers with a simple tool to create and propagate their listings.
- Deliver a premium, high-end user experience with modern design aesthetics.

## SCOPE
### In Scope
- **Random Discovery**: One-click generation of events for non-registered visitors.
- **Event Management**: Full CRUD (Create, Read, Update, Delete) for logged-in users.
- **Authentication**: Secure entry for organizers.
- **Promotion Flag**: Simple mechanism to highlight specific events.
- **Premium UI**: Modern, responsive interface with rich aesthetics.

### Out of Scope
- **Ticket Sales**: No financial transactions or booking systems.
- **Social Features**: No comments, likes, or user-to-user messaging.
- **Advanced Maps**: No complex geolocation or navigation (simple address only).
- **Analytics**: No tracking of event performance or visitor metrics.

## SUCCESS CRITERIA
- **Efficiency**: Visitors can discover an event in less than 2 clicks.
- **Simplicity**: Event creation is intuitive and takes under 2 minutes.
- **Aesthetics**: The design scores high on "premium" feel (evaluated via glassmorphism and smooth animations).
- **Reliability**: Data is correctly persisted and retrieved using SQLite.

## CORE USER FLOW
1. **Discovery (Guest)**: A visitor lands on the site, clicks a prominent "Generate Random Event" button, and is presented with a beautifully rendered event card.
2. **Management (User)**: A registered user logs in, accesses their dashboard, and uses an intuitive form to create a new event.
3. **Propagation**: Once saved, users can "Promote" their events to increase visibility on the platform.

## FEATURES
- **Random Event Engine**: Intelligent selection of events from the database.
- **Event Creation Suite**: Comprehensive form for adding event details (title, date, location, description).
- **User Authentication**: Secure login and registration for event management.
- **Promotion System**: Ability for users to highlight their events for better reach.
- **Interactive Event Cards**: Rich, animated displays for event information.

## TECH STACK
- **Framework**: TanStack Start (Vite, React, TanStack Router).
- **Styling**: Tailwind CSS (Modern, utility-first styling).
- **Icons**: Lucide React.
- **State Management**: TanStack Query & React Store.
- **Database**: SQLite (Local, persistent storage for events and users).

## DESIGN PRINCIPLES 
- **Premium Aesthetics**: High-end look with glassmorphism and curated color palettes.
- **Micro-animations**: Smooth transitions and hover effects to make the app feel "alive".
- **Visual Excellence**: Modern typography (Inter/Outfit) and vibrant, harmonious colors.
- **Mobile First**: Fully responsive design for all devices.