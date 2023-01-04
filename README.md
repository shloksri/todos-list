# Tests on how git works

**Description: Test 2 - pushing a `local` repository to an existing `remote` repository**

### Steps followed in this repository

1. A remote repository existed on github named **todos-list**.

2. Local repository existed in my computer, also named `todos-list`.

3. The local folder did not have git initialized. We need to do that before we can run git commands.

   - Command used: `git init`

4. Now added the remote repository

   - Command used: `git remote add origin https://github.com/shloksrivastava7/todos-list.git`

5. Now check the status of the files using `git status`

6. Used below basic commands to push all the local files to the repository.

   - _git add ._
   - _git commit -m "Initialized new repository"_
   - _git push -u origin main_
