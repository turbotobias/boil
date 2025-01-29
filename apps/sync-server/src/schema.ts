// These data structures define your client-side schema.
// They must be equal to or a subset of the server-side schema.
// Note the "relationships" field, which defines first-class
// relationships between tables.
// See https://github.com/rocicorp/mono/blob/main/apps/zbugs/src/domain/schema.ts
// for more complex examples, including many-to-many.

import {
	ANYONE_CAN,
	type ExpressionBuilder,
	NOBODY_CAN,
	type Row,
	boolean,
	createSchema,
	definePermissions,
	number,
	relationships,
	string,
	table,
} from '@rocicorp/zero'

const user = table('user')
	.columns({
		id: string(),
		name: string(),
		partner: boolean(),
	})
	.primaryKey('id')

const medium = table('medium')
	.columns({
		id: string(),
		name: string(),
	})
	.primaryKey('id')

const message = table('message')
	.columns({
		id: string(),
		senderID: string(),
		mediumID: string(),
		body: string(),
		timestamp: number(),
	})
	.primaryKey('id')

const messageRelationships = relationships(message, ({ one }) => ({
	sender: one({
		sourceField: ['senderID'],
		destField: ['id'],
		destSchema: user,
	}),
	medium: one({
		sourceField: ['mediumID'],
		destField: ['id'],
		destSchema: medium,
	}),
}))

export const schema = createSchema(1, {
	tables: [user, medium, message],
	relationships: [messageRelationships],
})

export type Schema = typeof schema
export type Message = Row<typeof schema.tables.message>
export type Medium = Row<typeof schema.tables.medium>
export type User = Row<typeof schema.tables.user>

// The contents of your decoded JWT.
type AuthData = {
	sub: string | null
}

export const permissions = definePermissions<AuthData, Schema>(schema, () => {
	const allowIfLoggedIn = (
		authData: AuthData,
		{ cmpLit }: ExpressionBuilder<Schema, keyof Schema['tables']>
	) => cmpLit(authData.sub, 'IS NOT', null)

	const allowIfMessageSender = (authData: AuthData, { cmp }: ExpressionBuilder<Schema, 'message'>) =>
		cmp('senderID', '=', authData.sub ?? '')

	return {
		medium: {
			row: {
				insert: NOBODY_CAN,
				update: {
					preMutation: NOBODY_CAN,
				},
				delete: NOBODY_CAN,
			},
		},
		user: {
			row: {
				insert: NOBODY_CAN,
				update: {
					preMutation: NOBODY_CAN,
				},
				delete: NOBODY_CAN,
			},
		},
		message: {
			row: {
				// anyone can insert
				insert: ANYONE_CAN,
				// only sender can edit their own messages
				update: {
					preMutation: [allowIfMessageSender],
				},
				// must be logged in to delete
				delete: [allowIfLoggedIn],
			},
		},
	}
})
