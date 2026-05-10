# DATABASE MODEL

## OVERVIEW
The database uses **SQLite** for local persistent storage, managed via **Drizzle ORM**. The schema is designed to be lightweight, type-safe, and focused on event management and secure authentication.

## TABLES

### 1. `users` (Updated for Better Auth)
Stores information about event organizers and authenticated users.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key | Unique identifier (UUID). |
| `name` | `text` | Not Null | Display name of the user. |
| `email` | `text` | Unique, Not Null | User's email address. |
| `email_verified`| `integer` | Boolean (0/1) | Whether the email has been verified. |
| `image` | `text` | Optional | URL to the user's profile image. |
| `password_hash`| `text` | Optional | Hashed password (managed by Better Auth). |
| `created_at` | `integer` | Default `Date.now()` | Timestamp of account creation. |
| `updated_at` | `integer` | Default `Date.now()` | Timestamp of last update. |

### 2. `sessions` (New - Better Auth)
Stores active user sessions.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key | Unique session identifier. |
| `user_id` | `text` | Foreign Key (`users.id`) | Reference to the authenticated user. |
| `token` | `text` | Not Null | Unique session token. |
| `expires_at` | `integer` | Not Null | Expiration timestamp. |
| `ip_address` | `text` | Optional | User's IP address. |
| `user_agent` | `text` | Optional | User's browser agent string. |

### 3. `accounts` (New - Better Auth)
Handles linked accounts (e.g., for future OAuth providers).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key | Unique account link identifier. |
| `user_id` | `text` | Foreign Key (`users.id`) | Reference to the user. |
| `account_id` | `text` | Not Null | ID provided by the external account. |
| `provider_id` | `text` | Not Null | Identifier of the provider (e.g., 'google'). |
| `access_token` | `text` | Optional | Access token from the provider. |
| `refresh_token` | `text` | Optional | Refresh token from the provider. |

### 4. `verifications` (New - Better Auth)
Stores tokens for email verification or password resets.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key | Unique verification identifier. |
| `identifier` | `text` | Not Null | The identifier being verified (email). |
| `value` | `text` | Not Null | The verification token/code. |
| `expires_at` | `integer` | Not Null | Expiration timestamp. |

### 5. `events`
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
- **User -> Sessions**: One-to-Many (One user can have multiple active sessions).
- **User -> Accounts**: One-to-Many (One user can link multiple OAuth accounts).

## SEED DATA (EXAMPLES)
| Title | Description | Location | Is Promoted |
| :--- | :--- | :--- | :--- |
| **Jazz Night** | Smooth jazz session with local artists. | Blue Note Café | 1 |
| **Tech Meetup** | Networking and talks on AI trends. | Hub Prague | 0 |
| **Park Yoga** | Morning yoga flow for all levels. | Stromovka Park | 0 |
| **Street Food Fest**| Flavors from around the world. | Market Square | 1 |
