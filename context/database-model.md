# DATABASE MODEL

## OVERVIEW
The database uses **SQLite** for local persistent storage, managed via **Drizzle ORM**. The schema is designed to be lightweight, type-safe, and focused on event management.

## TABLES

### 1. `users`
Stores information about event organizers.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key, UUID | Unique identifier for the user. |
| `email` | `text` | Unique, Not Null | User's email address (used for login). |
| `password_hash`| `text` | Not Null | Hashed password for security. |
| `name` | `text` | Not Null | Display name of the organizer. |
| `role_id` | `text` | Foreign Key (`roles.id`) | Link to the user's role. |
| `created_at` | `integer` | Default `Date.now()` | Timestamp of account creation. |

### 2. `events`
Stores the event details generated and promoted on the platform.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key, UUID | Unique identifier for the event. |
| `title` | `text` | Not Null | Title of the event. |
| `description` | `text` | Not Null | Detailed description of the event. |
| `date` | `integer` | Not Null | Timestamp of when the event occurs. |
| `location` | `text` | Not Null | General location description. |
| `address_id` | `text` | Foreign Key (`addresses.id`) | Link to detailed address. |
| `organizer_id` | `text` | Foreign Key (`users.id`) | Reference to the user who created the event. |
| `is_promoted` | `integer` | Default `0` (False) | Flag to highlight the event (Boolean 0/1). |
| `image_url` | `text` | Optional | URL to an event poster or thumbnail. |
| `created_at` | `integer` | Default `Date.now()` | Timestamp of record creation. |
| `updated_at` | `integer` | Default `Date.now()` | Timestamp of last modification. |

### 3. `addresses`
Stores detailed physical locations for events.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key, UUID | Unique identifier for the address. |
| `city` | `text` | Not Null | City name. |
| `street` | `text` | Not Null | Street name and house number. |
| `postal_code`| `text` | Not Null | ZIP / Postal code. |
| `created_at` | `integer` | Default `Date.now()` | Timestamp of record creation. |

### 4. `roles`
Defines user permissions and access levels.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key, UUID | Unique identifier for the role. |
| `name` | `text` | Not Null | Name of the role (e.g., 'Admin', 'Organizer'). |
| `is_admin` | `integer` | Default `0` (False) | Flag for administrative privileges. |
| `created_at` | `integer` | Default `Date.now()` | Timestamp of record creation. |

## RELATIONSHIPS
- **User -> Events**: One-to-Many (One user can organize many events).
- **Event -> User**: Many-to-One (Each event is linked to exactly one organizer).
- **Event -> Address**: One-to-One/Many-to-One (An event has one detailed address).
- **User -> Role**: Many-to-One (Each user has one assigned role).

## SEED DATA (EXAMPLES)
To assist with initial development and testing of the "Random Generator":

| Title | Description | Location | Is Promoted |
| :--- | :--- | :--- | :--- |
| **Jazz Night** | Smooth jazz session with local artists. | Blue Note Café | 1 |
| **Tech Meetup** | Networking and talks on AI trends. | Hub Prague | 0 |
| **Park Yoga** | Morning yoga flow for all levels. | Stromovka Park | 0 |
| **Street Food Fest**| Flavors from around the world. | Market Square | 1 |
