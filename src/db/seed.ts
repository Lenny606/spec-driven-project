import { db } from './index';
import { roles } from './schema/roles';
import { users } from './schema/users';
import { accounts } from './schema/accounts';
import { addresses } from './schema/addresses';
import { events } from './schema/events';
import { hashPassword } from "better-auth/crypto";

async function seed() {
  console.log('🌱 Seeding database...');

  // 1. Clean up
  await db.delete(events);
  await db.delete(accounts);
  await db.delete(users);
  await db.delete(addresses);
  await db.delete(roles);

  // 2. Roles
  const [adminRole] = await db.insert(roles).values([
    { name: 'Admin', isAdmin: true },
    { name: 'Organizer', isAdmin: false },
  ]).returning();

  // 3. System Organizer
  const hashedPassword = await hashPassword("password123");

  const [organizer] = await db.insert(users).values({
    name: 'System Organizer',
    email: 'admin@randomevent.com',
    roleId: adminRole.id,
  }).returning();

  // Better Auth stores password in the account table for credential provider
  await db.insert(accounts).values({
    id: crypto.randomUUID(),
    userId: organizer.id,
    accountId: organizer.id,
    providerId: "credential",
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // 4. Addresses
  const [addr1, addr2] = await db.insert(addresses).values([
    { city: 'Prague', street: 'Karlova 12', postalCode: '110 00' },
    { city: 'Brno', street: 'Namesti Svobody 1', postalCode: '602 00' },
  ]).returning();

  // 5. Events
  await db.insert(events).values([
    {
      title: 'Jazz Night',
      description: 'Smooth jazz session with local artists.',
      date: new Date('2026-06-15T20:00:00'),
      location: 'Blue Note Café',
      addressId: addr1.id,
      organizerId: organizer.id,
      isPromoted: true,
    },
    {
      title: 'Tech Meetup',
      description: 'Networking and talks on AI trends.',
      date: new Date('2026-06-20T18:30:00'),
      location: 'Hub Prague',
      addressId: addr1.id,
      organizerId: organizer.id,
      isPromoted: false,
    },
    {
      title: 'Park Yoga',
      description: 'Morning yoga flow for all levels.',
      date: new Date('2026-07-01T08:00:00'),
      location: 'Stromovka Park',
      addressId: addr2.id,
      organizerId: organizer.id,
      isPromoted: false,
    },
  ]);

  console.log('✅ Seeding completed!');
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
