# Git Best Practices Calculator App

This repository demonstrates best practices for using Git, particularly focusing on small, focused commits and managing branches effectively. The project is a simple TypeScript-based calculator application with unit tests written using Jest.

for the documentation this repo was created for: https://gist.github.com/thatkookooguy/e8b2e32abe9818b14246fc3bb4686147

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/git-best-practices-calculator-app.git
   cd git-best-practices-calculator-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Run the project:**
   ```bash
   npm start
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

6. **Run tests in watch mode:**
   ```bash
   npm run test:watch
   ```

## Branches

This repository includes several branches, each demonstrating different aspects of Git best practices. Below is a brief explanation of each branch:

1. **main**
   - The main branch contains the completed calculator app with all features implemented and tested.

2. **base-branch**
   - The base branch serves as the starting point for all feature branches. It includes the initial setup with TypeScript and Jest.

3. **example01/before-unwanted-commit-or-temporary-commit**
   - This branch shows a feature implemented with several intermediate commits that include temporary or unwanted changes. It demonstrates how not to structure commits.

4. **example01/after-unwanted-commit-or-temporary-commit**
   - This branch is a continuation from `example01/before-unwanted-commit-or-temporary-commit` showing how to move forward after unwanted commits.

5. **option1/feature/JIRA-001-JIRA-002-implement-calculator**
   - This branch demonstrates how to correctly split a feature into small, manageable commits. Each commit is focused and represents a logical step in the development process.

6. **option1/feature/JIRA-003-JIRA-004-implement-calculator**
   - Similar to `option1/feature/JIRA-001-JIRA-002-implement-calculator`, this branch also shows a feature split into small commits.

7. **option2/feature/calculator-implementation**
   - This branch demonstrates how to split a feature into small commits, starting with empty wrappers for new files and `test.todo` placeholders.

8. **option2/feature/tests-for-calculator-no-bug**
   - This branch contains the tests for the calculator implementation, showing a clean and structured approach to adding tests.

9. **feature/with-bug-showing-git-bisect**
   - This branch contains a bug introduced in one of the commits. It serves as an example for using `git bisect` to identify and fix the bug.

## Best Practices Demonstrated

1. **Small, Focused Commits:**
   - Each commit introduces a small, isolated change, making it easier to review and understand.
   - Commits include relevant unit tests to ensure the code is functional and verifiable.

2. **Using `test.todo`:**
   - Plan tests in advance using `test.todo` to outline the test cases and ensure complete test coverage.

3. **Commit Empty Wrappers:**
   - Start with empty wrappers for new files and basic test descriptions. This approach makes it easier to cherry-pick commits and reorder changes as needed.

4. **Interactive Rebase and Cherry-Pick:**
   - Use interactive rebase (`git rebase -i`) and cherry-pick (`git cherry-pick`) to manage and refine the commit history effectively.

### Why These Practices?

- **Commit Empty Wrappers Separately:**
  - Committing empty wrappers for new files as a separate commit establishes a clear structure for the codebase. This simplifies the process of cherry-picking and reordering commits.
  
- **Use `test.todo`:**
  - `test.todo` helps outline planned tests, ensuring a comprehensive testing strategy and making it clear what tests need to be implemented.

- **Pair Method Implementation and Tests:**
  - Pairing method implementation with its corresponding test in the same commit ensures each commit is functional and verifiable. This practice promotes a test-driven development (TDD) approach.

- **Why Keep Commits Small:**
  - Small, focused commits make it easier to identify and fix bugs, understand the purpose of each change, and facilitate better collaboration and code reviews.

By following these best practices, developers can maintain a clean, organized, and understandable commit history, making it easier to collaborate, review code, and debug issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
Feel free to customize the content to better fit your specific needs or repository structure.
