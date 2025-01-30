import { $ } from 'bun'

const branch_name = `auto-update-${Date.now()}`

try {
	const message = process.argv[2]
	if (!message) throw new Error('No message provided')
	// Create and switch to new branch
	await $`git checkout -b ${branch_name}`

	// Stage, commit and push
	await $`git add .`
	await $`git commit -m ${message}`
	await $`git push origin ${branch_name}`
	// Create PR using gh cli
	const pr =
		await $`gh pr create --base main --head ${branch_name} --title "${message}" --body "auto-generated PR"`

	// Get PR number from response
	const pr_number = (await pr.text()).match(/pull\/(\d+)/)?.[1]
	if (!pr_number) throw new Error('Failed to get PR number')

	// Merge PR
	await $`gh pr merge ${pr_number} --merge --delete-branch`

	console.log('✔️ PR created and merged successfully')
} catch (error) {
	console.error('❌ Failed:', error)
	process.exit(1)
}
