import { column, defineDb, defineTable } from 'astro:db';

const Author = defineTable({
	columns: {
		id: column.number({primaryKey: true}),
		name: column.text()
	}
})

const Course = defineTable({
	columns: {
		id: column.number({primaryKey: true}),
		title: column.text(),
		imageSrc: column.text()
	}
});

const Comment = defineTable({
	columns: {
		authorId: column.number({references: () => Author.columns.id}),
		body: column.text(),
		// A whole integer value.
		likes: column.number(),
		// A true or false value.
		flagged: column.boolean(),
		// Date/time values queried as JavaScript Date objects.
		published: column.date(),
		// An untyped JSON object.
		metadata: column.json(),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Comment,
		Author,
		Course
	},
});
