import { db, Comment, Author, Course } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Author).values([
		{ id: 1, name: 'Testing'},
		{ id: 2, name: 'Tester'}
	]);

	await db.insert(Comment).values([
		{ authorId: 1, body: 'dope you like Astro DB!',flagged: false, likes: 0, metadata: '', published: new Date()},
		{ authorId: 2, body: 'Enjoy',flagged: false, likes: 0, metadata: '', published: new Date()},
	]);

	await db.insert(Course).values([
		{
			id: 1,
			title: 'Spanish',
			imageSrc: '/es.svg'
		},
		      {
        id: 2,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
	])
}
