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
| `created_at` | `integer` | Default `Date.now()` | Timestamp of account creation. |

### 2. `events`
Stores the event details generated and promoted on the platform.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key, UUID | Unique identifier for the event. |
| `title` | `text` | Not Null | Title of the event. |
| `description` | `text` | Not Null | Detailed description of the event. |
| `date` | `integer` | Not Null | Timestamp of when the event occurs. |
| `location` | `text` | Not Null | Physical address or venue name. |
| `organizer_id` | `text` | Foreign Key (`users.id`) | Reference to the user who created the event. |
| `is_promoted` | `integer` | Default `0` (False) | Flag to highlight the event (Boolean 0/1). |
| `image_url` | `text` | Optional | URL to an event poster or thumbnail. |
| `created_at` | `integer` | Default `Date.now()` | Timestamp of record creation. |
| `updated_at` | `integer` | Default `Date.now()` | Timestamp of last modification. |

## RELATIONSHIPS
- **User -> Events**: One-to-Many (One user can organize many events).
- **Event -> User**: Many-to-One (Each event is linked to exactly one organizer).

## SEED DATA (EXAMPLES)
To assist with initial development and testing of the "Random Generator":

| Title | Description | Location | Is Promoted |
| :--- | :--- | :--- | :--- |
| **Jazz Night** | Smooth jazz session with local artists. | Blue Note Café | 1 |
| **Tech Meetup** | Networking and talks on AI trends. | Hub Prague | 0 |
| **Park Yoga** | Morning yoga flow for all levels. | Stromovka Park | 0 |
| **Street Food Fest**| Flavors from around the world. | Market Square | 1 |
